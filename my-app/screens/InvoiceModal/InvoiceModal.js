import { View, Modal, Text, Pressable, Image, TouchableOpacity } from 'react-native'
import { styles } from './InvoiceModal.style.js'
import { H5 } from '../../constants/fonts'
import { Icon } from '../../constants/icons.js'
import i18n from '../../configs/i18n.config.js'

// Uso exclusivo para simulación
import getServerData from '../../simulations/Modals/InvoiceModal.sim'
import { useEffect, useState } from 'react'

const InvoiceModal = ({ invoiceTextStyle, modalStyle, imageStyle, navigation }) => {
  /* Se intenta hacer simulación con esto, debido a que no hay url solo path, no se puede cargar la imagen con la simulación */
  const [serverData, setServerData] = useState({})

  const getDataFromServer = async () => {
    const data = await getServerData()
    setServerData(data)
  }

  useEffect(() => {
    getDataFromServer()
  }, [])

  return (
    <Modal
      transparent
      animationType='slide'
    >
      <TouchableOpacity
        onPressOut={() => { navigation.goBack() }}
      >
        <View style={[styles.container, modalStyle]}>
          <H5 style={[styles.invoiceStyle, invoiceTextStyle]}>{i18n.t('DETAILED_INVOICE')}</H5>
          <Pressable style={styles.iconPress} onPress={() => navigation.goBack()}>
            <Text style={styles.icon}>{Icon.close}</Text>
          </Pressable>
          <Image style={[styles.image, imageStyle]} source={require('../../assets/images/Factura.png') /* Se debe cambiar a uri cuando hayan URL */} />
        </View>

      </TouchableOpacity>
    </Modal>
  )
}

export default InvoiceModal
