package api.requests.callback;

import api.logging.Action;
import api.logging.LogSeverity;
import api.requests.helper.HttpRequestFactory;
import com.jayway.jsonpath.JsonPath;
import org.json.JSONObject;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.LinkedHashMap;
import java.util.Random;

import static api.global.IConstants.*;

/**
 * Notification class for handling notifications to Coordinator.
 */
public class Notification {

    public Notification(){
    }

    public static void sendNotification(JSONObject body, URI uri, int retries, int delay){
        HttpClient httpClient = HttpClient.newBuilder()
                .version(HttpClient.Version.HTTP_1_1)
                .connectTimeout(Duration.ofSeconds(10))
                .build();

        try {
            HttpRequest httpRequest = HttpRequestFactory.getHttpRequest(POST, body.toString())
                    .headers("Content-Type", "application/json")
                    .uri(uri)
                    .build();

            HttpResponse<String> response = httpClient.send(httpRequest, HttpResponse.BodyHandlers.ofString());

            if(response.statusCode()!=200){
                if(retries <= MAX_RETRIES){
                    Thread.sleep(delay);
                    sendNotification(body, uri, retries++, calculateDelay(retries));
                }
            }

        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }

    public static JSONObject buildResponseBody(String body, Action action, LinkedHashMap<String, Object> newVariables, String log, LogSeverity logSeverity){
        JSONObject responseBody = new JSONObject();

        int stepId = JsonPath.parse(body).read("$.stepId");

        responseBody.put("stepId", stepId);
        responseBody.put("variables", newVariables);
        responseBody.put("action", action.getValue());
        responseBody.put("logs", log);
        responseBody.put("logSeverity", logSeverity.getValue());

        return responseBody;
    }

    /**
     * Calculate the delay based on the following formula
     * min(((2^n)+random_number_milliseconds), maximum_backoff)
     */
    private static int calculateDelay(int retries) {
        return (int) Math.min(Math.pow(2, retries) + (new Random().nextInt() * 60), MAX_DELAY);
    }
}
