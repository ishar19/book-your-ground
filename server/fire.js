import firebase from 'firebase/compat/app';
import {getFirestore} from 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA5k__jLdpp5IvLiOFO50DAQ7UXxVq4YB8",
    authDomain: "book-my-ground-331b5.firebaseapp.com",
    projectId: "book-my-ground-331b5",
    storageBucket: "book-my-ground-331b5.appspot.com",
    messagingSenderId: "529019554109",
    appId: "1:529019554109:web:147852f796984f4d725d54",
    measurementId: "G-2VC9DJLVKJ"
};

try {
    const app = firebase.initializeApp(firebaseConfig);
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack);
    }
}
