import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBFAEi_4qhpOpYVFecXZfmCqCn_KFIWm2c",
  authDomain: "react-chat-20a3b.firebaseapp.com",
  projectId: "react-chat-20a3b",
  storageBucket: "react-chat-20a3b.appspot.com",
  messagingSenderId: "925180698349",
  appId: "1:925180698349:web:6db264655a223940ca36e4"
};


const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();
const db = fire.firestore()


export { auth, db }