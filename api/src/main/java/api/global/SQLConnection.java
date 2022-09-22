package api.global;


import api.pojos.User;

import java.sql.*;

public class SQLConnection {

    private final String connectionString = "jdbc:sqlserver://192.168.1.19:1433;databaseName=MACT";
    private final String user = "sa";
    private final String password = "Str0ngPa$$w0rd";

    private final static SQLConnection ourInstance = new SQLConnection();

    public static SQLConnection getInstance() {
        return ourInstance;
    }

    private SQLConnection() {
        try {
            Connection connection = DriverManager.getConnection(connectionString, user, password);
            System.out.println("Connection Successful");
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public User getUser(String email, byte[] password){
        try (Connection conn = DriverManager.getConnection(connectionString, user, this.password)) {

            CallableStatement proc = conn.prepareCall("{call FindUser(?,?)}");

            proc.registerOutParameter(1, Types.INTEGER);

            proc.setString(1, email);
            proc.setBytes(2, password);

            ResultSet value = proc.executeQuery();
            proc.execute();
            int ret = proc.getInt(0);

            if(ret==2){
                return new User(email);
            } else {
                return null;
            }


        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
}