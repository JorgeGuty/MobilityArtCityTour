package api.logging;

public enum Action {
    RECEIVED("received"),
    STARTED("started"),
    FINISHED("finished"),
    ERROR("error"),
    ALIVE("alive"),
    LOG("log");

    private final String value;
    Action(String log) {
        this.value = log;
    }

    public String getValue() {
        return value;
    }
}
