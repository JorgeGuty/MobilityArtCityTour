package api.global;


import api.pojos.User;

import java.sql.*;

public class SQLConnection {

    private final String connectionString = "jdbc:sqlserver://172.26.160.1:1433;databaseName=MACT;encrypt=true;trustServerCertificate=true";
    private final String user = "jg";
    private final String password = "holamundo";

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

            CallableStatement proc = conn.prepareCall("{? = call FindUser(?,?)}");

            proc.registerOutParameter(1, Types.INTEGER);

            proc.setString(2, email);
            proc.setBytes(3, password);

            proc.execute();
            int ret = proc.getInt(1);

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

    public boolean insertUser(String email, byte[] password){
        try (Connection conn = DriverManager.getConnection(connectionString, user, this.password)) {

            CallableStatement proc = conn.prepareCall("{? = call insertUser(?,?)}");

            proc.registerOutParameter(1, Types.INTEGER);

            proc.setString(2, email);
            proc.setBytes(3, password);

            proc.execute();
            int ret = proc.getInt(1);

            return ret==1;


        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }

    public boolean updatePassword(String email, byte[] password, byte[] newPassword){
        try (Connection conn = DriverManager.getConnection(connectionString, user, this.password)) {

            CallableStatement proc = conn.prepareCall("{? = call updatePassword(?,?,?)}");

            proc.registerOutParameter(1, Types.INTEGER);

            proc.setString(2, email);
            proc.setBytes(3, password);
            proc.setBytes(4, newPassword);

            proc.execute();
            int ret = proc.getInt(1);

            return ret==1;


        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }

}