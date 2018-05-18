import firebase from 'firebase'


var config = {
  apiKey: "AIzaSyC27QgTpSc2JsjwCV9VQWVD7hLaNj9eU30",
  authDomain: "vuejs-chat-firebase.firebaseapp.com",
  databaseURL: "https://vuejs-chat-firebase.firebaseio.com",
  projectId: "vuejs-chat-firebase",
  storageBucket: "vuejs-chat-firebase.appspot.com",
  messagingSenderId: "654191283502"
};
firebase.initializeApp(config);
const storage =  firebase.storage()
const database = firebase.database()

export {
  database,
  storage
}