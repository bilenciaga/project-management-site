import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDG7zVK7n7DcFeTaN_D7r8Y0jS_I-RLj9A",

  authDomain: "project-management-site-f8944.firebaseapp.com",

  projectId: "project-management-site-f8944",

  storageBucket: "project-management-site-f8944.appspot.com",

  messagingSenderId: "798884782614",

  appId: "1:798884782614:web:f9c37aaca8c76f4b1c0b37",

  measurementId: "G-5W67H21SSB"

};
  

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }