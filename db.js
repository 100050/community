// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';
import { getFirestore, collection, getDocs, setDoc, doc } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-lite.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-o2Iv9YpWi5uzc__gJ3KdrKcbo-8IiOc",
  authDomain: "community-ff496.firebaseapp.com",
  databaseURL: "https://community-ff496-default-rtdb.firebaseio.com",
  projectId: "community-ff496",
  storageBucket: "community-ff496.appspot.com",
  messagingSenderId: "144487039080",
  appId: "1:144487039080:web:3176e475961b50d5b0fbdd",
  measurementId: "G-EYR8J6KRB6"
};

// Initialize Firebase
// firebaseConfig 정보로 firebase 시작
const app = initializeApp(firebaseConfig);
// firebase의 firestore 인스턴스를 변수에 저장
const db = getFirestore(app);

export async function readFirestore(title) {
  const querySnapshot = await getDocs(collection(db, "articles"));
  let t;
  let c;
  querySnapshot.forEach((doc) => {
    if (title == doc.data().title) {
      t = doc.data().title;
      c = doc.data().content;
    }
  });
  document.querySelector('#title').innerHTML = t;
  document.querySelector('#content').innerHTML = c;
}

export async function writeFirestore(article_title, article_content) {
  await setDoc(doc(db, "articles", article_title), {
    title: JSON.stringify(article_title),
    content: JSON.stringify(article_content)
  });
}