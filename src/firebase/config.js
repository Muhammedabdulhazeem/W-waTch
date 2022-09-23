import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDtHhLAlA6LlnekVezqp4xE2tJlt7Td_4g",
  authDomain: "w-watch-9e2d9.firebaseapp.com",
  projectId: "w-watch-9e2d9",
  storageBucket: "w-watch-9e2d9.appspot.com",
  messagingSenderId: "517399404956",
  appId: "1:517399404956:web:95a2df3d226b9fe7626859"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// timestamp
const timestamp = firebase.firestore.Timestamp

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth, timestamp }

