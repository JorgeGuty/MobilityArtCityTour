package api.requests.helper;

import java.net.http.HttpRequest;

public class HttpRequestFactory {
    public static HttpRequest.Builder getHttpRequest(String type, String body){
        if(body == null){
            body = "";
        }

        switch (type){
            case "POST":
                return HttpRequest.newBuilder().POST(HttpRequest.BodyPublishers.ofString(body));
            case "PUT":
                return HttpRequest.newBuilder().PUT(HttpRequest.BodyPublishers.ofString(body));
            case "DELETE":
                return HttpRequest.newBuilder().DELETE();
            case "GET":
            default:
                return HttpRequest.newBuilder().GET();
        }
    }
}
