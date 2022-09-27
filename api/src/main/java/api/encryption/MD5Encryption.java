package api.encryption;

import org.apache.commons.codec.binary.Hex;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

public class MD5Encryption {

    private static String partnerSitePassword(String password){
        LocalDateTime local = LocalDateTime.now(ZoneOffset.UTC);
        String month = String.valueOf(local.getMonthValue());
        String day = String.valueOf(local.getDayOfMonth());
        String hour = String.valueOf(local.getHour());

        if(month.length()<2){
            month = "0"+month;
        }
        if(day.length()<2){
            day = "0"+day;
        }
        if(hour.length()<2){
            hour = "0"+hour;
        }

        String dateString = local.getYear() + month + day + hour;
        String valueToHash = password + ":" + dateString;
        try {

            String var = new String(Hex.encodeHex(MessageDigest.getInstance("MD5").digest(valueToHash.getBytes())));
            return var;

        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static String getPartnerSitePasswordRR(String endpoint){
        String password;
        if(endpoint.contains("sprint")){
            password = "12345679";
        } else {
            password = "13245";
        }

        return partnerSitePassword(password);

    }

    public static String getPartnerSitePasswordNHS(){
        String password = "aewe7895";
        return partnerSitePassword(password);
    }

}
