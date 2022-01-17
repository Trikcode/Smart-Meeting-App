import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Menu from '../components/Menu'
import ContextMenu from '../components/ContextMenu'
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header />
        <SearchBar />
        <Menu navigation={navigation} />
        <ContextMenu />
      </SafeAreaView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1c',
    padding: 15,
    flex: 1,
  },
})

export default Home
