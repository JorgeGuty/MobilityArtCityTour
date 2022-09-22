package api.controllers;

import api.pojos.Route;
import com.google.gson.Gson;
import com.google.gson.stream.JsonReader;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.FileReader;

@RestController
public class MainController {

    /**
     * Simple API Request.
     *
     * @param body the body
     * @return the response entity
     */
    @PostMapping(value = "/login", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> request(@RequestBody String body){

        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     * Endpoint for testing.
     *
     * @param body the body
     * @return the response entity
     */
    @PostMapping(value = "/hola", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> test(@RequestBody String body){
        System.out.println("Hola");
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/getRoute", produces = MediaType.APPLICATION_JSON_VALUE)
    public Route testLogin(@RequestParam(value = "username") String value, @RequestParam(value = "password") String value2){
        //return SQLConnection.getInstance().login(value, value2);
        Route data = null;
        try {
            Gson gson = new Gson();
            JsonReader reader = new JsonReader(new FileReader("src/main/resources/mockingJson/ruta1.json"));
            data = gson.fromJson(reader, Route.class);
        } catch (Exception e){
            e.printStackTrace();
        }
        return data;
    }

}
