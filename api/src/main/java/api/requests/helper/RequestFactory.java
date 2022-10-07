package api.requests.helper;


import com.jayway.jsonpath.ReadContext;

import java.util.LinkedHashMap;

public class RequestFactory {

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
