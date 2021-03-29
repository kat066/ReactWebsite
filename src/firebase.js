import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCinDwc0rLB4PbqgtIkE7YPXVJ1g9obxtQ",
    authDomain: "kaisite-c1899.firebaseapp.com",
    databaseURL: "https://kaisite-c1899-default-rtdb.firebaseio.com",
    projectId: "kaisite-c1899",
    storageBucket: "kaisite-c1899.appspot.com",
    messagingSenderId: "1095414243090",
    appId: "1:1095414243090:web:5af3499d68afd994199dcb",
    measurementId: "G-0LCK8Y5L9T"
};
firebase.initializeApp(firebaseConfig);
export default firebase;