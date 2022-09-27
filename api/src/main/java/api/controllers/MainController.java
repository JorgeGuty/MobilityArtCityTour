package api.controllers;

import api.global.SQLConnection;
import api.global.SendEmail;
import api.multithreading.Code;
import api.pojos.Route;
import api.pojos.User;
import com.google.gson.Gson;
import com.google.gson.stream.JsonReader;
import com.jayway.jsonpath.JsonPath;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.FileReader;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;

@RestController
public class MainController {

    ArrayList<Code> codes = new ArrayList<>();

    /**
     * Simple API Request.
     *
     * @param body the body
     * @return the response entity
     */
    @PostMapping(value = "/login", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> request(@RequestBody String body){

        System.out.println("Request arrives");

        String email = JsonPath.parse(body).read("$.email");
        String passwordHashed = JsonPath.parse(body).read("$.password");

        User user = SQLConnection.getInstance().getUser(email, passwordHashed.getBytes());
        if (user!=null){
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    /**
     * Endpoint for testing.
     *
     * @param body the body
     * @return the response entity
     */
    @PostMapping(value = "/hola", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> test(@RequestBody String body){
        String hello = JsonPath.parse(body).read("$.hola");
        return new ResponseEntity<>(hello, HttpStatus.OK);
    }

    @GetMapping(value = "/getRoute", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Route> testLogin(@RequestParam(value = "rutaId") String rutaId){
        //return SQLConnection.getInstance().login(value, value2);
        Route data;
        try {
            Gson gson = new Gson();
            JsonReader reader = new JsonReader(new FileReader("src/main/resources/mockingJson/ruta1.json"));
            data = gson.fromJson(reader, Route.class);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping(value = "/signUp", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> signUp(@RequestBody String body){

        String email = JsonPath.parse(body).read("$.email");
        String passwordHashed = JsonPath.parse(body).read("$.password");

        if(SQLConnection.getInstance().insertUser(email, passwordHashed.getBytes())){
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }


    }

    @PostMapping(value = "/updatePassword", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updatePassword(@RequestBody String body){

        String email = JsonPath.parse(body).read("$.email");
        String passwordHashed = JsonPath.parse(body).read("$.password");
        String newPasswordHashed = JsonPath.parse(body).read("$.newPassword");

        if(SQLConnection.getInstance().updatePassword(email, passwordHashed.getBytes(), newPasswordHashed.getBytes())){
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping(value = "/recoverPassword", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> recoverPassword(@RequestBody String body){

        String email = JsonPath.parse(body).read("$.email");
        String passwordHashed = JsonPath.parse(body).read("$.password");
        String newPasswordHashed = JsonPath.parse(body).read("$.newPassword");
        String code = JsonPath.parse(body).read("$.code");

        try {
            Code codeObject = codes.stream().filter(code1 -> code1.getEmail().equals(email)).findFirst().orElseThrow();
            if(ChronoUnit.SECONDS.between(codeObject.getNow(), LocalDateTime.now()) < 300 && codeObject.getCode().equals(code) && codeObject.isConfirmed()){
                codes.remove(codeObject);
                SQLConnection.getInstance().updatePassword(email, passwordHashed.getBytes(), newPasswordHashed.getBytes());
                return new ResponseEntity<>(HttpStatus.OK);
            } else {
                codes.remove(codeObject);
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }


    @PostMapping(value = "/confirmCode", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> confirmCode(@RequestBody String body){

        String email = JsonPath.parse(body).read("$.email");
        String code = JsonPath.parse(body).read("$.code");

        try {
            codes.forEach(c -> {
                System.out.println(c.getCode());
                System.out.println(c.getEmail());
            });

            Code codeObject = codes.stream().filter(c -> c.getEmail().equals(email)).findFirst().orElseThrow();
            if(ChronoUnit.SECONDS.between(codeObject.getNow(), LocalDateTime.now()) < 300 && codeObject.getCode().equals(code)){
                codeObject.setConfirmed(true);
                return new ResponseEntity<>(HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }


    @PostMapping(value = "/requestCode", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> requestCode(@RequestBody String body){

        String email = JsonPath.parse(body).read("$.email");

        //SENDS EMAIL
        try {
            Code code = SendEmail.sendCode(email);
            codes.add(code);

        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(HttpStatus.OK);

    }


}
