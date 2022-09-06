import React, { useRef, useState } from 'react'
import { View, Animated, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Icon } from '../../../constants/icons'
import IconButton from '../../buttons/IconButton/IconButton'
import { Icon as FIcon } from '../../../constants/fonts'
import { styles } from './PlanCardSelected.style'

const PlanCardSelected = ({
  gradientColor,
  headerRender,
  children,
  containerStyle,
  headerStyle,
  buttonStyle,
  shadowStyle,
  showExpandButton
}) => {
  const [showingDetail, setShowingDetail] = useState(false)
  const maxHeight = useRef(new Animated.Value(showExpandButton ? 0 : 400)).current

  const toggleDetail = () => {
    showingDetail ? setShowingDetail(false) : setShowingDetail(true)
    Animated.timing(maxHeight, {
      toValue: showingDetail ? 0 : 400,
      duration: 1000,
      useNativeDriver: false
    }).start()
  }

  return (
    <View style={[styles.shadow, shadowStyle]}>
      <LinearGradient
        colors={gradientColor}
        style={[styles.container, containerStyle]}
      >
        <View style={[styles.header, headerStyle]}>{headerRender}</View>
        {children
          ? (
            <View>
              <View style={styles.line} />
              <Animated.View style={[{ maxHeight }]}><View style={styles.content}>{children}</View></Animated.View>
              {showExpandButton
                ? (
                  <View style={styles.expandButton}>
                    <TouchableOpacity
                      onPress={() => {
                        toggleDetail()
                      }}
                    >
                      <FIcon
                        style={styles.icon}
                      >
                        {showingDetail ? Icon.expandLess : Icon.expandMore}
                      </FIcon>
                    </TouchableOpacity>
                  </View>)
                : null}
            </View>
            )
          : null}
        <View style={styles.checkButton}>
          <IconButton setEditable style={[styles.checkButton, buttonStyle]}>
            {Icon.check}
          </IconButton>
        </View>
      </LinearGradient>
    </View>
  )
}
export default PlanCardSelected
