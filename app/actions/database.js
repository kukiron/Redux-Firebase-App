import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBiLXjQRoCzvoXv7NzxD_yXz0LiYlfuGHg',
  authDomain: 'redux-firebase-app.firebaseio.com',
  databaseURL: 'https://redux-firebase-app.firebaseio.com/'
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
