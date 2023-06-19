// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-o2Iv9YpWi5uzc__gJ3KdrKcbo-8IiOc",
  authDomain: "community-ff496.firebaseapp.com",
  projectId: "community-ff496",
  storageBucket: "community-ff496.appspot.com",
  messagingSenderId: "144487039080",
  appId: "1:144487039080:web:3176e475961b50d5b0fbdd",
  measurementId: "G-EYR8J6KRB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const express = require('express')
const router = express.Router();

// config.js에서 export한 모듈을 다음과 같이 import 시킬 수 있다. (같은 디렉토리 위치)
const database = require('./config');

// localhost:3000/firebase/save 호출
router.get('/save', function(req, res){
    database.ref('customer').set({name : "junseok"}, function(error) {
        if(error)
            console.error(error)
        else
            console.log("success save !!");
    });
    return res.json({firebase : true});
});

module.exports = router;
