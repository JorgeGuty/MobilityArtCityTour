package api.pojos;

import java.util.ArrayList;

public class Route {
    public String name;
    public ArrayList<Stop> stops;

    public Route(String name, ArrayList<Stop> stops) {
        this.name = name;
        this.stops = stops;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<Stop> getStops() {
        return stops;
    }

    public void setStops(ArrayList<Stop> stops) {
        this.stops = stops;
    }
}
