import { Dimensions } from "react-native"

export const Constants = {
  noLocationPermissionGrantedTitle: "Ubicación denegada",
  noLocationPermissionGrantedMessage: "No le dió permiso al app para acceder a la ubicación de su dispositivo.",
  selectedRouteModalRelativeHeight: Dimensions.get('screen').height / 3 > 260 ? 260 : Dimensions.get('screen').height / 3,
  interestPointsModalRelativeHeight: Dimensions.get('screen').height / 4 > 200 ? 200 : Dimensions.get('screen').height / 4,
  homeHeaderHeight: Dimensions.get('screen').height / 10
}
