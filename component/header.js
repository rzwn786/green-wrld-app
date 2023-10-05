import { View,Image } from 'react-native'
import React from 'react'

const header = () => {
  return (
    <View>
      <Image 
        source={require('../asset/icons/logo.png')} 
        style = {{marginTop:20,width:200,height:200}}
        />
    </View>
  )
}

export default header