package api.logging;

import static api.global.IConstants.MAX_RESPONSE_SIZE_BYTES;

public interface LogDefaultMessages {
    String StartProcessingRequest = "Started Processing Request";
    String FinishProcessingRequest = "Finished processing request: ";
    String EmptyEndpoint = "Endpoint value is empty on content received";
    String InvalidJsonReceived = "Invalid Json received";
    String InvalidMapping = "Mapping is not one of the 4 available options: POST, PUT, DELETE, GET";
    String MissingIgnoreFlag = "Could not obtain ignoreJsonPathError from content";
    String MissingIgnoreValue = "Could not read defaultValueOnIgnore from content but ignoreJsonPathError is true";
    String InvalidJsonPathExpr = "Error reading JSON Path Expression. Json path expression is not valid on obtained response";
    String ResponseTooBig = "Response size is over the accepted limit. Size limit is: " + MAX_RESPONSE_SIZE_BYTES;
}
