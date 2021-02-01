 import firebase from 'firebase';
 
  var firebaseConfig = {
    apiKey: "AIzaSyAyqGiq6ysADsK_E6e4Vvo6iBFi_IFyqH4",
    authDomain: "login---react---firebase.firebaseapp.com",
    projectId: "login---react---firebase",
    storageBucket: "login---react---firebase.appspot.com",
    messagingSenderId: "128320239328",
    appId: "1:128320239328:web:2604e9dc6835f7b3b50285",
    measurementId: "G-YTYQLJH7Q0"
  };

  
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;