package api.requests.helper;

import com.jayway.jsonpath.ReadContext;

import java.util.LinkedHashMap;

public abstract class AbstractRequest implements Runnable {

    protected final String body;
    protected final LinkedHashMap<String, Object> variables;
    protected final String callback;
    protected final ReadContext contentReadContext;

    public AbstractRequest(String body, LinkedHashMap<String, Object> variables, String callback, ReadContext contentReadContext) {
        this.body = body;
        this.variables = variables;
        this.callback = callback;
        this.contentReadContext = contentReadContext;
    }

    public String getBody() {
        return body;
    }

    public LinkedHashMap<String, Object> getVariables() {
        return variables;
    }

    public String getCallback() {
        return callback;
    }
}
