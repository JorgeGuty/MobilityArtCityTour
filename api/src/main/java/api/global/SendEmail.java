package api.global;

import api.multithreading.Code;

import javax.mail.*;
import javax.mail.internet.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Properties;
import java.util.Random;

public class SendEmail {

    public static Code sendCode(String email) throws AddressException {

        String[] recipientList = email.split(",");
        InternetAddress[] recipientAddress = new InternetAddress[recipientList.length];
        int counter = 0;
        for (String recipients: recipientList) {
            recipientAddress[counter] = new InternetAddress(recipients.trim());
            counter++;
        }


        // Sender's email ID needs to be mentioned
        String from = "movilityartcitytour@gmail.com";

        final String username = "movilityartcitytour@gmail.com";//change accordingly
        final String password = "detfofctfwbjlckb";//change accordingly

        // Assuming you are sending email from through gmails smtp
        String host = "smtp.gmail.com";

        // Get system properties
        Properties properties = System.getProperties();

        // Setup mail server

        properties.put("mail.smtp.host", "smtp.gmail.com");
        properties.put("mail.smtp.port", "465");
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");
        properties.put("mail.smtp.starttls.required", "true");
        properties.put("mail.smtp.ssl.protocols", "TLSv1.2");
        properties.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");

        // Get the Session object.
        Session session = Session.getDefaultInstance(properties,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(username,password);
                    }
                });

        try {
            // Create a default MimeMessage object.
            Message message = new MimeMessage(session);

            // Set From: header field of the header.
            message.setFrom(new InternetAddress(from));

            // Set To: header field of the header.
            message.setRecipients(Message.RecipientType.TO,
                    recipientAddress);

            // Set Subject: header field
            message.setSubject("Requested Recovery Code");

            // Create the message part
            BodyPart messageBodyPart = new MimeBodyPart();
            DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
            Date date = new Date();
            // Now set the actual message

            // Use this if you are sending just the Url

            String id = String.format("%04d", new Random().nextInt(10000));

            messageBodyPart.setText("The code is: " + id);


            // Use this if you are sending the attachment
            //messageBodyPart.setText("I attach the report of the execution of the day " + dateFormat.format(date));

            // Create a multipar message
            Multipart multipart = new MimeMultipart();

            // Set text message part
            multipart.addBodyPart(messageBodyPart);

            // Send the complete message parts
            message.setContent(multipart);

            // Send message
            Transport.send(message);

            System.out.println("Sent message successfully....");

            return new Code(id, email);

        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }

}