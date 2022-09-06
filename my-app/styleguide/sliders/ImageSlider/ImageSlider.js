import { Pressable, View, Image, FlatList, Text } from 'react-native'
import { useState, useEffect, useRef } from 'react'
import { ImageSliderStyles } from '../ImageSlider/ImageSlider.styles'
import ChevronLeft from '../../../assets/icons/chevron_left'
import ChevronRight from '../../../assets/icons/chevron_right'
import i18n from '../../../configs/i18n.config'
import { Subtitle2 } from '../../../constants/fonts'

const ImageSlider = ({
  images,
  style,
  disable
}) => {
  const [imageIndex, setImageIndex] = useState(0)
  const scrollRef = useRef(null)

  const renderImages = () => {
    return (
      <FlatList
        data={images}
        keyExtractor={(_item, index) => 'key' + index}
        pagingEnabled
        scrollEnabled={false}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={ImageSliderStyles.scrollContainer}
        ref={scrollRef}
        renderItem={({ item }) => {
          return (
            <Image
              style={
                [
                  { width: ImageSliderStyles.componentContainer.width - (2 * ImageSliderStyles.scrollButtons.width) }
                ]
              }
              resizeMode='contain'
              source={{ uri: item.url }}
            />
          )
        }}
      />
    )
  }

  const changeImage = (pDirection) => {
    const indexChange = (imageIndex + (1 * pDirection))
    const newIndex = indexChange < 0 ? images.length - 1 : indexChange % images.length

    scrollRef.current.scrollToIndex({ animated: true, index: newIndex })
    setImageIndex(newIndex)
  }

  useEffect(() => {
    console.log(images.length)
  }, [])

  return (
    <View style={[ImageSliderStyles.componentContainer, style]}>
      <View style={ImageSliderStyles.imagesContainer}>

        <Pressable
          onPress={() => {
            changeImage(-1)
          }}
        >
          <ChevronLeft
            width={ImageSliderStyles.scrollButtons.width}
            height={ImageSliderStyles.scrollButtons.height}
            style={ImageSliderStyles.scrollButtons}
          />
        </Pressable>

        {
        images && images.length > 0
          ? renderImages()
          : null
        }

        <Pressable
          onPress={() => {
            changeImage(1)
          }}
        >
          <ChevronRight
            width={ImageSliderStyles.scrollButtons.width}
            height={ImageSliderStyles.scrollButtons.height}
            style={ImageSliderStyles.scrollButtons}
          />
        </Pressable>

      </View>
      <Subtitle2
        allowFontScaling
        style={ImageSliderStyles.caption}
      >
        {imageIndex + 1 + i18n.t('OF_SEPARATOR') + images.length}
      </Subtitle2>

    </View>

  )
}

export default ImageSlider
