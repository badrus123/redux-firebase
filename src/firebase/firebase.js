import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBE_S90dBdioaBj26ubvdD7XrL9xR6xtak',
  authDomain: 'dayone-badrus.firebaseapp.com',
  projectId: 'dayone-badrus',
  storageBucket: 'dayone-badrus.appspot.com',
  messagingSenderId: '1074694735359',
  appId: '1:1074694735359:web:776c10b04e4b0507fc13ca',
  measurementId: 'G-H8L00EWQZC',
}

// initilialize firebase
firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()
export const todosRef = firestore.collection('/todos')
