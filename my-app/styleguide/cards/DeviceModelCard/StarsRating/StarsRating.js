import { View } from 'react-native'
import EmptyStar from '../../../../assets/icons/EmptyStar'
import FullStar from '../../../../assets/icons/FullStar'
import HalfStar from '../../../../assets/icons/HalfStar'
import { styles } from './StarsRating.style'

const StarsRating = ({

  numberOfStars,
  rating,
  containerStyle,
  startStyle

}) => {
  return (

    <View style={[styles.containerStyle, containerStyle]}>

      {[...Array(numberOfStars)].map((button, i) => {
        return (
          i + 1 <= rating
            ? <FullStar key={i} style={[styles.starsStyle, startStyle]} />
            : i + 1 <= rating + 0.5
              ? <HalfStar key={i} style={[styles.starsStyle, startStyle]} />
              : <EmptyStar key={i} style={[styles.starsStyle, startStyle]} />

        )
      })}

    </View>

  )
}

export default StarsRating
