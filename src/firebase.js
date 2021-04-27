import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDufr1zXAsHFiazfknvcpBTLiGWR9STO4k",
  authDomain: "to-do-dc9cb.firebaseapp.com",
  databaseURL: "https://to-do-dc9cb-default-rtdb.firebaseio.com",
  projectId: "to-do-dc9cb",
  storageBucket: "to-do-dc9cb.appspot.com",
  messagingSenderId: "3741266363",
  appId: "1:3741266363:web:e2530587b2c8254bb2949e"
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.database()