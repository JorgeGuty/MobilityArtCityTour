package api.encryption;

import com.jayway.jsonpath.JsonPath;
import com.jayway.jsonpath.ReadContext;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Random;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeUnit;

public class AESEncryption {

    public static final String ALGORITHM = "AES";
    private static final String AES_CBS_PADDING = "AES/CBC/PKCS5Padding";
    public final static String baseURL = "http://beta-api.thebdxlive.com/Bdx";
    private final static String user = "bhinhsautomation";
    private final static String password = "password";

    public static String getAuthorizationToken() throws Exception {
        String key = getRandom16digitsString();
        String iv = getRandom16digitsString();

        String randomString = "{\"userName\":\""+user+"\",\"password\":\""+password+"\"}";

        byte[] cipherText = encrypt(key.getBytes(StandardCharsets.UTF_8), iv.getBytes(StandardCharsets.UTF_8), randomString.getBytes());
        String userToken = "\""+Base64.getEncoder().encodeToString( (key+ "." + iv + "."+Base64.getEncoder().encodeToString(cipherText)).getBytes(StandardCharsets.US_ASCII) ) + "\"";

        HttpClient httpClient = HttpClient.newBuilder()
                .version(HttpClient.Version.HTTP_1_1)
                .connectTimeout(Duration.ofSeconds(30))
                .build();


        List<String> headers = new ArrayList<>();
        headers.add("Content-Type");
        headers.add("application/json");

        HttpRequest httpRequest;
        httpRequest = HttpRequest.newBuilder().POST(HttpRequest.BodyPublishers.ofString(userToken))
                .headers(headers.toArray(new String[0]))
                .uri(new URI(AESEncryption.baseURL+"/Authentication"))
                .build();

        CompletableFuture<HttpResponse<String>> response = httpClient.sendAsync(httpRequest, HttpResponse.BodyHandlers.ofString());
        String responseBody = String.valueOf(response.thenApply(HttpResponse::body).get(30, TimeUnit.SECONDS));
        ReadContext authorizationResponse = JsonPath.parse(responseBody);
        return authorizationResponse.read("$.Result.data");
    }

    private static String getRandom16digitsString() {
        var builder = new StringBuilder();
        while (builder.length() < 16)
        {
            builder.append((new Random()).nextInt(10));
        }
        return builder.toString();
    }

    private static byte[] encrypt(final byte[] key, final byte[] IV, final byte[] message)
            throws Exception {
        final Cipher cipher = Cipher.getInstance(AES_CBS_PADDING);
        final SecretKeySpec keySpec = new SecretKeySpec(key, ALGORITHM);
        final IvParameterSpec ivSpec = new IvParameterSpec(IV);
        cipher.init(Cipher.ENCRYPT_MODE, keySpec, ivSpec);
        return cipher.doFinal(message);
    }


}
