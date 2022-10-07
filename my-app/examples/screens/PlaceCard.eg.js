import { useState } from "react"
import { Pressable, View } from "react-native"
import PlaceCard from "../../styleguide/cards/place_card/PlaceCard"


const PlaceCardExample = () => {

    const [sizeToggler, setSizeToggler] = useState(true)
    const dummyPlace = {
        placeName: 'Pizza Hut',
        category: 'Restaurante',
        isOpen: true,
        description: 'Officia eiusmod do ex nisi consequat eu occaecat officia anim mollit do. Cillum Lorem proident dolore id aute mollit ut consequat magna aliquip adipisicing. Eiusmod cupidatat cillum nostrud eiusmod dolor excepteur proident proident est. Laboris esse ad elit est occaecat laborum qui dolore quis velit enim ad commodo. Cupidatat ea nisi nisi occaecat veniam tempor labore sit esse. Incididunt cupidatat reprehenderit sit anim aliquip anim culpa in amet incididunt qui velit.',
        phone: '+506 2256 7895',
        economicCategory: '$$',
        imageUrl: 'https://th.bing.com/th/id/R.8c7b3df6d0e9aa6fec0b3357df431af4?rik=epV1PJJz7oEAzw&pid=ImgRaw&r=0', 
        location: {
            latitude: 9.933102329459889,
            longitude: -84.07883146031479,
        }
    }

    return (
        <View
            style={{
                width:'100%',
                height:'100%',
            }}
        >
            <Pressable
                style={
                    {
                        width:100,
                        height:100,
                        backgroundColor: 'red'
                    }
                }
                onPress={() => setSizeToggler(!sizeToggler)}
            />
            <PlaceCard
                startMaximized
                sizeToggler={sizeToggler}
                place={dummyPlace}
            >
            </PlaceCard>
        </View>
    )
}

export default PlaceCardExample