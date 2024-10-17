import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
  return (
<>
<Text style={{
    textAlign:'center'
}}>Hello Home</Text>
<View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }}>
      <Text>Home</Text>
<Link href={'/about'}>About</Link>
<Link href={'/contact'}>Contact</Link>
<Link href={'/services'}>Services</Link>
    </View>

</>
     


  )
}

export default Home