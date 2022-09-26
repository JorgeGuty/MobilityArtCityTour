package api.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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

}
