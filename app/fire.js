import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCvyUGoSo-zyEw7f4RC5jUtCyMPQ6DHfq8',
  authDomain: 'motivationalandinspirati-23582.firebaseapp.com',
  databaseURL: 'https://motivationalandinspirati-23582.firebaseio.com',
  projectId: 'motivationalandinspirati-23582',
  storageBucket: 'motivationalandinspirati-23582.appspot.com',
  messagingSenderId: '75911602635'
};

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
