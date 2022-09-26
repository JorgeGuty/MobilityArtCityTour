package api.logging;

public enum LogSeverity {
    INFORMATION("information"),
    DEBUG("debug"),
    ERROR("error"),
    FATAL("fatal");

    private final String value;

    LogSeverity(String information) {
        this.value = information;
    }

    public String getValue() {
        return value;
    }
}
