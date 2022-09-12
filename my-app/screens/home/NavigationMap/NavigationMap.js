import React, { useEffect, useState, useRef, Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, AnimatedRegion, Marker } from 'react-native-maps';
import { MapStyle } from './NavigationMap.styles';
import MapViewDirections from 'react-native-maps-directions';

const NavigationMap = ({ initialRegion, stops, showStops }) => {

  const [latitude, setLatitude] = useState(initialRegion.latitude)
  const [longitude, setLongitude] = useState(initialRegion.longitude)
  const [latitudeDelta, setLatitudeDelta] = useState(initialRegion.latitudeDelta)
  const [longitudeDelta, setLongitudeDelta] = useState(initialRegion.longitudeDelta)

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
              />
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
              apikey={'AIzaSyAvIj-2g_q0awQM-ZDT8F7k2BjrGfOGWFc'}
            />

          )) 
        }
      </>
    )
  }

  return (
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
  )
}

export default NavigationMap
