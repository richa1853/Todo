 
 
 import firebase from "firebase";

 const firebaseApp=firebase.initializeApp({
        apiKey:"AIzaSyBUFyYUECkiyH6n-kRWU7Du8kVXW6Q1GpQ",
        authDomain:"todo-app-cp.firebaseapp.com",
        databaseURL:"https://todo-app-cp.firebaseio.com",
        projectId:"todo-app-cp-d2f01",
        storageBucket:"todo-app-cp.appspot.com",
        messagingSenderId:"566087794671",
        appId:"1:566087794671:web:1b1a9eb670477688b5001a",
        measurementId:"G-SH5WR2D4SG"
});

const db=firebaseApp.firestore();

export default db;
