import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Fontisto } from 'react-native-vector-icons'
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Fontisto name='search' size={20} color='#858585' />
      <Text style={styles.textSearchBar}>Search</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
  },
  textSearchBar: {
    color: '#858585',
    fontSize: 20,
    paddingLeft: 10,
  },
})

export default SearchBar
