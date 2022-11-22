import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {

    apiKey: "AIzaSyBG1739j_ql-_ij8724NtCnZ2PO51ToxKM",
  
    authDomain: "project-manager-site-22b63.firebaseapp.com",
  
    projectId: "project-manager-site-22b63",
  
    storageBucket: "project-manager-site-22b63.appspot.com",
  
    messagingSenderId: "919535044710",
  
    appId: "1:919535044710:web:4fa76ac87d5ca4a92285a7",
  
    measurementId: "G-M7V6G9E8T9"
  
  };

  // init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage ,timestamp }