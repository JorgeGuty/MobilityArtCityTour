package api.utilities;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jayway.jsonpath.JsonPath;
import com.jayway.jsonpath.ReadContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class JsonProcessor {

    public static String parseRequestContent(String body){
        return JsonPath.parse(body).read("$.content");
    }

    public static Map<String, String> getHeadersAsMap(String content){
        Map<String, String> map = new HashMap<>();
        try {
            net.minidev.json.JSONArray headerArray = JsonPath.parse(content).read("$.headers");
            org.json.JSONArray jsonArray = new org.json.JSONArray(headerArray.toJSONString());
            for (int i = 0; i < jsonArray.length(); i++) {
                JSONObject jsonObject = jsonArray.getJSONObject(i);
                String key = jsonObject.keySet().stream().findFirst().orElseThrow(Exception::new);
                String value = jsonObject.get(key).toString();
                map.put(key, value);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return map;
    }

    public static List<String> getHeadersAsList(ReadContext content){
        List<String> values = new ArrayList<>();

        try {
            net.minidev.json.JSONArray headerArray = content.read("$.headers");
            org.json.JSONArray jsonArray = new org.json.JSONArray(headerArray.toJSONString());
            for (int i = 0; i < jsonArray.length(); i++) {
                JSONObject jsonObject = jsonArray.getJSONObject(i);
                String key = jsonObject.keySet().stream().findFirst().orElseThrow(Exception::new);
                String value = jsonObject.get(key).toString();
                values.add(key);
                values.add(value);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return values;
    }

    public static String formatContent(LinkedHashMap<String, Object> variables, String content) {
        List<?> keys = new ArrayList<>(variables.keySet()); //Strings
        for (Object key : keys) {
            String stringKey = (String) key;

            //Get the value in the variable
            if(variables.get(stringKey) instanceof String){
                String value = (String) variables.get(stringKey);
                //Checks value to see if it has nested variables and replaces them with the actual value
                value = findRecursive(variables, value, 0);
                variables.put((String) key, value);
            }
        }

        for (String s : variables.keySet()) {
            if(variables.get(s) instanceof String){
                content = content.replaceAll("#\\{"+s+"}", (String) variables.get(s));
            }
        }

        return content;
    }

    private static String findRecursive(LinkedHashMap<String, Object> variables, String value, int count){
        if(count >5){
            return value;
        }

        List<String> nestedVars = getMatches(value);
        for (String nestedVar : nestedVars) {
            try{
                String nestedValue = (String) variables.get(nestedVar);
                value = value.replaceAll("#\\{"+nestedVar+"}", findRecursive(variables, nestedValue, count++));
            } catch (NullPointerException e){
                return value;
            }
        }

        return value;
    }

    private static List<String> getMatches(String value){
        List<String> allMatches = new ArrayList<>();
        Matcher m = Pattern.compile("#\\{(.*?)}")
                .matcher(value);
        while (m.find()) {
            allMatches.add(m.group(1));
        }

        return allMatches;
    }

    public static boolean isJSONValid(String test) {
        try {
            new JSONObject(test);
        } catch (JSONException ex) {
            // e.g. in case JSONArray is valid as well...
            try {
                new org.json.JSONArray(test);
            } catch (JSONException ex1) {
                return false;
            }
        }
        return true;
    }

    public static String executeJsonPath(String jsonPath, String body, Boolean ignoreJsonPathError, String defaultValue) throws Exception{

        if(jsonPath.equals("")){
            return body;
        }

        String json;
        ObjectMapper mapper = new ObjectMapper();

        Object object;
        try {
            object = JsonPath.parse(body).read(jsonPath);
            json = mapper.writeValueAsString(object);
        } catch (Exception e){
            if(ignoreJsonPathError){
                json = defaultValue;
            } else {
                throw e;
            }
        }
        return json;
    }

    /**
     * This method filters out the leading and trailing "s from a String
     * @param valueReceived string to be filtered
     * @return formatted string
     */
    public static String filterFinalValue(String valueReceived){
        if(!valueReceived.startsWith("{") && valueReceived.startsWith("\"")){
            Pattern p = Pattern.compile("\"([^\"]*)\"");
            Matcher m = p.matcher(valueReceived);
            while (m.find()) {
                valueReceived = m.group(1);
            }
        }
        return valueReceived;
    }
}
