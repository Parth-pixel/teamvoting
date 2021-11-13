import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDe012dBlteGsVsudVcV4HoQu6X9w_HjUI",
  authDomain: "team-voting-5aae7.firebaseapp.com",
  databaseURL: "https://team-voting-5aae7-default-rtdb.firebaseio.com",
  projectId: "team-voting-5aae7",
  storageBucket: "team-voting-5aae7.appspot.com",
  messagingSenderId: "1079586548927",
  appId: "1:1079586548927:web:d152b726980f6e35486a0a",
  measurementId: "G-7W4DK69Y3V"
};

firebase.initializeApp(firebaseConfig);
export default firebase.database();