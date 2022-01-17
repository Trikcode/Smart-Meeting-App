import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { AntDesign } from 'react-native-vector-icons'
const contactsMenuItems = [
  {
    type: 'starred',
    name: 'Starred',
  },
  {
    type: 'contact',
    name: 'Ashilla',
    photo: require('../assets/ashilla.jpg'),
  },
  {
    type: 'contact',
    name: 'Beta',
    photo: require('../assets/beta.jpg'),
  },
  {
    type: 'contact',
    name: 'Nobert',
    photo: require('../assets/Nobert.jpg'),
  },
]
const ContextMenu = () => {
  return (
    <View style={styles.container}>
      {contactsMenuItems.map((item, index) => {
        return (
          <View style={styles.row} key={index}>
            {item.type == 'starred' ? (
              <View style={styles.starredIcon}>
                <AntDesign name='star' size={30} color='#efefef' />
              </View>
            ) : (
              <Image source={item.photo} style={styles.image} />
            )}

            <View>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          </View>
        )
      })}
    </View>
  )
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  starredIcon: {
    backgroundColor: '#333333',
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    marginLeft: 25,
    color: 'white',
    fontSize: 18,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
})

export default ContextMenu
