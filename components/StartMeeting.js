import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'
const StartMeeting = ({ name, setName, roomID, setRoomID, joinRoom }) => {
  return (
    <View>
      <View style={styles.startMeeting}>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            value={name}
            placeholder='Enter Name'
            placeholderTextColor={'#767476'}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            value={roomID}
            placeholder='Enter new Room ID'
            placeholderTextColor={'#767476'}
            onChangeText={(text) => setRoomID(text)}
          />
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.startMeetingbtn} onPress={joinRoom}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            Start Meeting
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  info: {
    width: '100%',
    backgroundColor: '#373538',
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#484648',
    padding: 12,
    justifyContent: 'center',
  },
  textInput: {
    color: 'white',
    fontSize: 18,
  },
  startMeetingbtn: {
    width: 350,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0470DC',
    height: 50,
    borderRadius: 15,
  },
})

export default StartMeeting
