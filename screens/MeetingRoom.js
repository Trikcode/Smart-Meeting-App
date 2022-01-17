import React, { useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native'
// import { } from 'react-native-gesture-handler'
import io from 'socket.io-client'
import StartMeeting from '../components/StartMeeting'
import { Camera } from 'expo-camera'
import { FontAwesome } from 'react-native-vector-icons'

const menuIcons = [
  {
    id: 1,
    name: 'microphone',
    title: 'Mute',
    customColor: '#efefef',
  },
  {
    id: 2,
    name: 'video-camera',
    title: 'Stop Video',
  },
  {
    id: 3,
    name: 'upload',
    title: 'Share Content',
  },
  {
    id: 4,
    name: 'group',
    title: 'Participants',
  },
]

const MeetingRoom = () => {
  const [name, setName] = React.useState()
  const [roomID, setRoomID] = React.useState()
  const [startCamera, setStartCamera] = React.useState(false)
  const [activeUsers, setActiveUsers] = React.useState()
  const socket = io('http://192.168.1.116:5000')
  const startCameraa = async () => {
    const { status } = await Camera.requestPermissionAsync()
    if (status === 'granted') {
      setStartCamera(true)
    } else {
      console.log('no')
    }
  }
  const joinRoom = () => {
    // startCameraa()
    socket.emit('join-room', { userName: name, roomID: roomID })
  }
  useEffect(() => {
    socket.on('connection', () => console.log('connected here'))
    console.log('here we are')
    // socket.on('all-users', (users) => {
    //   console.log('Active')
    //   users = users.filter((user) => user.userName != name)
    //   setActiveUsers(users)
    // })
  }, [])

  return (
    <View style={styles.container}>
      {startCamera ? (
        <SafeAreaView>
          <View style={styles.activeContainer}>
            <View style={styles.cameraContainer}>
              <Camera
                type={'front'}
                style={{
                  with: activeUsers.length == 0 ? '100%' : 200,
                  height: activeUsers.length == 0 ? 600 : 200,
                }}
              ></Camera>
              {activeUsers.map((user) => {
                return (
                  <View style={styles.activeUserContainer}>
                    <Text style={{ color: 'white' }}>{user}</Text>
                  </View>
                )
              })}
            </View>
          </View>
          <View style={styles.menu}>
            {menuIcons.map((icon) => {
              return (
                <TouchableOpacity style={styles.tile}>
                  <FontAwesome name={icon.name} size={24} color='#efefef' />
                  <Text style={styles.textTile}>{icon.title}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
        </SafeAreaView>
      ) : (
        <StartMeeting
          name={name}
          setName={setName}
          roomID={roomID}
          setRoomID={setRoomID}
          joinRoom={joinRoom}
        />
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1c',
    flex: 1,
  },
  tile: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop: 50,
  },
  textTile: {
    color: 'white',
    marginTop: 10,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'center',
  },
  cameraContainer: {
    backgroundColor: 'black',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  activeContainer: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  activeUserContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default MeetingRoom
