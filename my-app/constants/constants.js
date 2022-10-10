import { Dimensions } from "react-native"

export const Constants = {
  noLocationPermissionGrantedTitle: "Ubicación denegada",
  noLocationPermissionGrantedMessage: "No le dió permiso al app para acceder a la ubicación de su dispositivo.",
  selectedRouteModalRelativeHeight: Dimensions.get('screen').height / 3 > 260 ? 260 : Dimensions.get('screen').height / 3,
  interestPointsModalRelativeHeight: Dimensions.get('screen').height / 4 > 200 ? 200 : Dimensions.get('screen').height / 4,
  homeHeaderHeight: Dimensions.get('screen').height / 10,
  interestPointsModalButtonOffset: 20,
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,

    elevation: 1
  },
  verLista:'Ver Lista',
  verMapa:'Ver Mapa',
  animationsDuration: 500,
}
