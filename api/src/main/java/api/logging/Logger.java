package api.logging;


import api.requests.callback.Notification;
import org.json.JSONObject;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.LinkedHashMap;

import static api.global.IConstants.*;

public class Logger {

    // id will increase with each message logged!
    static int id = 0;

    /**
     * Logs a message in the log file found at the LOG_FILE_PATH parameter
     * synchronized so that the method is thread safe!
     * @param logSeverity Error | Info | Debug etc.
     * @param message The message you wish to log
     */
    public synchronized static void log(String logSeverity, String message) {

        LocalDateTime currentDateTime = LocalDateTime.now();

        String atT = currentDateTime.toString();
        String atI = id++ + "";
        String applicationName = "WebHook API";


        // Build a String with the message content in json format!
        String logMsg =

                // {
                "{" +

                        // "@t":"YYYY-MM-DDTHH:MM:SS:MS",
                        "\"@t\":\"" +
                        atT +
                        "\"," +

                        // "@m":"Log Message Here",
                        "\"@m\":\"" +
                        message +
                        "\"," +

                        // "@i":"12345",
                        "\"@i\":\"" +
                        atI +
                        "\"," +

                        // "@l":"Info|Debug|Error etc.",
                        "\"@l\":\"" +
                        logSeverity +
                        "\"," +

                        // "ApplicationName":"Selenium Engine"
                        "\"Application Name\":\""+applicationName+"\"" +

                        // }
                        "}\n";

        try {

            String pattern = "yyyy-MM-dd";
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);

            String date = simpleDateFormat.format(new Date());

            File logFile = findRecursively(date, 1, true);
            purgeLogFiles(new File(LOG_PATH)); //Checks directory for old files and deletes them

            FileWriter fw = new FileWriter(logFile.getAbsoluteFile(), true);
            fw.append(logMsg);
            fw.close();

        } catch (IOException e) {
            /*
              no safe way to log this exception if it occurs since it could cause a
              recursive loop. Since this method has the synchronized keyword, that
              would deadlock the entire engine!
             */
            e.printStackTrace();
        }
    }

    private static File findRecursively(String date, int recursionDepth, boolean originalFile) throws IOException {
        String newFileName;
        if(originalFile){
            newFileName = LOG_PATH+"\\"+LOG_BASE_NAME+"-"+date+LOG_EXTENSION;
        } else {
            //NameConvention for extra files
            newFileName = LOG_PATH+"\\"+LOG_BASE_NAME+date+recursionDepth+LOG_EXTENSION;
        }


        File logFile = new File(newFileName);
        logFile.getParentFile().mkdirs();
        logFile.createNewFile();

        // file.length() returns size in bytes
        // divide that by 1024 to get kb
        // divide again by 1024 to get mb
        if(logFile.length() / 1024 / 1024 < 100){
            return logFile;
        }

        recursionDepth++;
        return findRecursively(date, recursionDepth, false);
    }

    public static void purgeLogFiles(File logDir){
        File[] logFiles = logDir.listFiles();
        long oldestDate = Long.MAX_VALUE;
        File oldestFile = null;
        if( logFiles != null && logFiles.length >199){
            //delete oldest files after theres more than 200 log files
            for(File f: logFiles){
                if(f.lastModified() < oldestDate){
                    oldestDate = f.lastModified();
                    oldestFile = f;
                }
            }

            if(oldestFile != null){
                oldestFile.delete();
            }
        }
    }

    public static void logMessage(String message, LinkedHashMap<String, Object> variables, String body, String callback, LogSeverity logSeverity, Action action) {
        JSONObject newBody = Notification.buildResponseBody(body, action, variables, message, logSeverity);
        Logger.log(logSeverity.getValue(), message);
        try{
            Notification.sendNotification(newBody, new URI(callback), 0, 0);
        } catch (URISyntaxException e) {
            Logger.log(logSeverity.getValue(), e.getMessage());
            throw new RuntimeException(e);
        }
    }
}