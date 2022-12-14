import React, { useEffect, useState, useRef, Component } from 'react'
import { Dimensions, Platform, Pressable, processColor, StyleSheet, Text, View, Alert } from 'react-native';
import MapView, { PROVIDER_GOOGLE, AnimatedRegion, Marker } from 'react-native-maps';
import { MapStyle, styles } from './NavigationMap.styles';
import MapViewDirections from 'react-native-maps-directions';
import IndexedMarker from '../../../styleguide/markers/IndexedMarker/IndexedMarker';
import {API_KEY} from "@env";
import CurrentLocation from '../../../assets/icons/boton_ubicacion_actual.svg'
import { Animated } from 'react-native';
import * as Location from 'expo-location';

import { Constants } from '../../../constants/constants';

const NavigationMap = ({ stops, showStops, onPressStop }) => {

  const initialRegion = {
    latitude: stops[0].latitude,
    longitude: stops[0].longitude,
    latitudeDelta: 0.0061,
    longitudeDelta: 0.0061
  }

  const [latitude, setLatitude] = useState(initialRegion.latitude)
  const [longitude, setLongitude] = useState(initialRegion.longitude)
  const [latitudeDelta, setLatitudeDelta] = useState(initialRegion.latitudeDelta)
  const [longitudeDelta, setLongitudeDelta] = useState(initialRegion.longitudeDelta)

  const currentLocationPinTranslation = useRef(new Animated.Value(0)).current


  const animateCurrentLocationPin = () => {
    Animated.sequence([
      Animated.timing(
        currentLocationPinTranslation,
        {
          toValue: 100,
          duration: 1000,
          useNativeDriver: true
        }
      )
    ]).start()
  }

  useEffect(() => {
    !showStops ? animateCurrentLocationPin() : null
  }, [showStops])

  const getLocationAsync = async () => {
    
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      showNoLocationPermissionAlert()
      return
    }
 
    let location = await Location.getCurrentPositionAsync({})
    setLatitude(initialRegion.latitude)
    setLongitude(initialRegion.longitude)
    setLatitude(location.coords.latitude)
    setLongitude(location.coords.longitude)
  };

  const showNoLocationPermissionAlert = () => {  
    Alert.alert(  
        Constants.noLocationPermissionGrantedTitle,  
        Constants.noLocationPermissionGrantedMessage,  
        [  
            {  
                text: 'Volver',  
                onPress: () => console.log('Cancel Pressed'),  
                style: 'destructive',  
            }
        ]  
    );  
  }  

  const renderStops = () => {
    return (
      <>
        {
          stops.map((stop, index) => (
              <Marker
                key={"M"+index}
                coordinate={{
                  latitude: stop.latitude,
                  longitude: stop.longitude
                }}
                title={stop.name}
                onPress={() => onPressStop(stop)}
              >
                <IndexedMarker index={index+1}></IndexedMarker>
              </Marker>
          ))
        }
        {  
          stops.map((stop, index) => (

            <MapViewDirections 
              key={"D"+index}
              origin={stop}
              destination={stops[(index + 1) % stops.length]}
              strokeWidth={10}
              strokeColor="rgba(255,187,51,1)"
              lineCap='butt'
              lineJoin='bevel'
              apikey={API_KEY}
            />

          )) 
        }
      </>
    )
  }
  return (
    <>
      <MapView
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          customMapStyle={MapStyle}
          showsUserLocation
          
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: latitudeDelta,
            longitudeDelta: longitudeDelta
          }}
          
          initialRegion={initialRegion}
      >
        {
          !!showStops ? renderStops() : null
        }

      </MapView>
      <Animated.View style={{ transform: [{ translateY: currentLocationPinTranslation }] }}>
        <Pressable onPress={getLocationAsync} style={{position: 'absolute', bottom: Dimensions.get('screen').height / 3 , alignSelf:'flex-end', padding: 20}}>
            <CurrentLocation height={40} width={40} style={styles.shadow}></CurrentLocation>
        </Pressable>
      </Animated.View>        
    </>
  )
}

export default NavigationMap
