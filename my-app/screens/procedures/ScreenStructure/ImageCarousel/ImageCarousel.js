import { useState, useEffect, useRef } from 'react'
import { View, Image, Animated, FlatList } from 'react-native'
import { StyleCarousel } from './ImageCarousel.style'
import { Constants } from '../../../../constants/constants'
import { Colors } from '../../../../constants/colors'
/*
  Use example:
  <ImageCarousel
    images={[
          { url: 'https://kolbi.cr/wps/contenthandler/dav/content/libraries/wcm.library.kolbi%20es/components/mikolbi/Kioskos/MainBanner/wcm.comps.image/es_mainbannerkolbi2_tab.png' },
          { url: 'https://kolbi.cr/wps/contenthandler/dav/content/libraries/wcm.library.kolbi%20es/components/mikolbi/Kioskos/MainBanner/wcm.comps.image/es_mainbannerkolbi1_tab.png' },
          { url: 'https://kolbi.cr/wps/contenthandler/dav/content/libraries/wcm.library.kolbi%20es/components/mikolbi/Kioskos/MainBanner/wcm.comps.image/es_mainbannerkolbi3_tab.png' },
          { url: 'https://kolbi.cr/wps/contenthandler/dav/content/libraries/wcm.library.kolbi%20es/components/mikolbi/Kioskos/MainBanner/wcm.comps.image/es_mainbannerkolbi4_tab.png' },
          { url: 'https://kolbi.cr/wps/contenthandler/dav/content/libraries/wcm.library.kolbi%20es/components/mikolbi/Kioskos/MainBanner/wcm.comps.image/es_mainbannerkolbi5_tab.png' }
        ]}
  />
*/
const ImageCarousel = ({ style, images }) => {
  const [imageDimensions, setImageDimensions] = useState()
  const scrollRef = useRef(null)
  const position = new Animated.Value(0)
  const layoutSize = useRef()
  const imageSize = useRef()
  const firstRender = useRef(true)

  const startAutoScroll = () => {
    const imagesListSize = images.length
    let newPosition = 0
    setInterval(function () {
      if (scrollRef.current !== null) {
        newPosition++
        if (newPosition >= imagesListSize) {
          newPosition = 0
        }
        scrollRef.current.scrollToIndex({ animated: true, index: newPosition })
      }
    }, 5000)
  }

  const handleImagesData = async () => {
    if (images[0]) {
      await Image.getSize(images[0].url, (width, height) => { imageSize.current = { width, height } })
      setImagesSize()
      startAutoScroll()
    }
  }

  useEffect(() => {
    handleImagesData()
  }, [images])

  const changeImage = ({ nativeEvent }) => {
    const imageSelected = Math.round(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
    if (imageSelected !== position) {
      position.setValue(imageSelected)
    }
  }

  const setImagesSize = () => {
    let imageWidth = Constants.imageDefaultSize.width
    let imageHeight = Constants.imageDefaultSize.height
    if (imageSize.current) {
      imageWidth = imageSize.current.width
      imageHeight = imageSize.current.height
    }
    const maxHeight = layoutSize.current.width * (imageHeight / imageWidth)
    const maxWidth = (layoutSize.current.height > maxHeight
      ? maxHeight
      : layoutSize.current.height) * (imageWidth / imageHeight)
    setImageDimensions({ maxWidth, maxHeight })
  }

  const renderCarousel = () => {
    return (
      <View style={[
        StyleCarousel.scrollContent,
        { maxHeight: imageDimensions.maxHeight, maxWidth: imageDimensions.maxWidth }
      ]}
      >
        <FlatList
          data={images}
          keyExtractor={(_item, index) => 'key' + index}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          style={StyleCarousel.scrollContainer}
          scrollEventThrottle={1000}
          ref={scrollRef}
          onScroll={changeImage}
          renderItem={({ item }) => {
            return (
              <Image
                style={[StyleCarousel.imageStyle, { width: imageDimensions.maxWidth }]}
                resizeMode='stretch'
                source={{ uri: item.url }}
              />
            )
          }}
        />
        <View style={StyleCarousel.scrollButtonContainer}>
          {images.map((_image, index) => {
            const backgroundColor = position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [Colors.textAlt1, Colors.text1, Colors.textAlt1],
              extrapolate: 'clamp'
            })
            return (
              <Animated.View
                key={index}
                style={[
                  StyleCarousel.scrollButton,
                  { backgroundColor }
                ]}
              />
            )
          })}
        </View>
      </View>
    )
  }

  return (
    <View
      style={[StyleCarousel.container, style]}
      onLayout={(e) => {
        layoutSize.current = { width: e.nativeEvent.layout.width, height: e.nativeEvent.layout.height }
        if (firstRender.current) {
          firstRender.current = false
        } else {
          setImagesSize()
        }
      }}
    >
      {imageDimensions && images && images.length > 0
        ? renderCarousel()
        : null}
    </View>
  )
}
export default ImageCarousel
