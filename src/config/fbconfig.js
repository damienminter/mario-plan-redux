import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBzD0f7U4Zx1hzX5niSd1cHVn8-a__StEw",
    authDomain: "learning-63a7a.firebaseapp.com",
    databaseURL: "https://learning-63a7a.firebaseio.com",
    projectId: "learning-63a7a",
    storageBucket: "learning-63a7a.appspot.com",
    messagingSenderId: "483138480956",
    appId: "1:483138480956:web:5aaf3d30aeef656c700c39",
    measurementId: "G-HBQYHYQ1KW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
//   .settings({ timestampsInSnapshots: true })

  export default firebase;