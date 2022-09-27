package api.multithreading;

import java.time.LocalDateTime;

public class Code {
    private final String code;
    private final String email;
    public final LocalDateTime now = LocalDateTime.now();
    private boolean confirmed = false;

    public Code(String code, String email) {
        this.code = code;
        this.email = email;
    }

    public String getCode() {
        return code;
    }

    public String getEmail() {
        return email;
    }

    public LocalDateTime getNow() {
        return now;
    }

    public boolean isConfirmed() {
        return confirmed;
    }

    public void setConfirmed(boolean confirmed) {
        this.confirmed = confirmed;
    }
}
