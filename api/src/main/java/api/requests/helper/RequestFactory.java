package api.requests.helper;

import api.requests.BDXLiveRequest;
import api.requests.GraphQLRequest;
import api.requests.RrRequest;
import api.requests.SimpleRequest;
import com.jayway.jsonpath.ReadContext;

import java.util.LinkedHashMap;

public class RequestFactory {

    public static AbstractRequest getRequest(String body, LinkedHashMap<String, Object> variables, String callback, ReadContext contentReadContext){
        RequestType requestType = getRequestType(contentReadContext);
        switch (requestType){
            case Simple:
            default:
                return new SimpleRequest(body, variables, callback, contentReadContext);
            case BDXLive:
                return new BDXLiveRequest(body, variables, callback, contentReadContext);
            case Ratings:
                return new RrRequest(body, variables, callback, contentReadContext);
            case GraphQL:
                return new GraphQLRequest(body, variables, callback, contentReadContext);
        }
    }

    private static RequestType getRequestType(ReadContext contentReadContext){
        System.out.println(contentReadContext.jsonString());
        String endpoint = contentReadContext.read("$.endpoint");

        RequestType requestType;
        if(endpoint.contains("rr-api.newhomesource.com")){
            requestType = RequestType.Ratings;
        } else if(endpoint.contains("thebdxlive.com")) {
            requestType = RequestType.BDXLive;
        }else if (endpoint.contains("api.newhomesource.com/api/v3/graphQL")){
            requestType = RequestType.GraphQL;
        } else {
            requestType = RequestType.Simple;
        }
        return requestType;
    }
}
