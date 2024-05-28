import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDQX2H1cCkOL7jQ-AIBVUr7tn1mqoxAyuM",
  authDomain: "school-project-data-ba7f5.firebaseapp.com",
  databaseURL: "https://school-project-data-ba7f5-default-rtdb.firebaseio.com",
  projectId: "school-project-data-ba7f5",
  storageBucket: "school-project-data-ba7f5.appspot.com",
  messagingSenderId: "490384390308",
  appId: "1:490384390308:web:f4a456fb09219788d58e31"
};

let app = firebase.initializeApp(firebaseConfig);

export default app.database();
 

  