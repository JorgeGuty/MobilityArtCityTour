import React from 'react'
import { View } from 'react-native'
import { H7, Subtitle1 } from '../../../constants/fonts'
import { styles } from './RatedCard.style'
import StarsRating from './StarsRating/StarsRating'

const RatedCard = ({
  subtitle,
  title,
  rating,
  style
}) => {
  return (
    <View style={[styles.container, style]}>
      <Subtitle1 style={[styles.content]}>{subtitle}</Subtitle1>
      <H7 style={[styles.content]}>{title} </H7>
      <StarsRating numberOfStars={5} rating={rating} startStyle={styles.content} />
    </View>
  )
}

export default RatedCard
