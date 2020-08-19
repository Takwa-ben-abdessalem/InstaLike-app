import firebase from 'firebase'
import 'firebase/storage'

export const app = firebase.initializeApp({
    "projectId": "instagram-like-portol-app",
    "appId": "1:987246632721:web:018b2d8aed740f6e1ab6b0",
    "databaseURL": "https://instagram-like-portol-app.firebaseio.com", 
    "storageBucket": "instagram-like-portol-app.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyC9-hGb4-HofU1kJj3bkcvnoymfUtbMzgw",
    "authDomain": "instagram-like-portol-app.firebaseapp.com",
    "messagingSenderId": "987246632721",
    "measurementId": "G-819L21TWXG"
  });