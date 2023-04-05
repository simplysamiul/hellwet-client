import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZWWUWK6NpIIFNJ4cBoNFp8LlXCNZo2Vk",
  authDomain: "helwett-task.firebaseapp.com",
  projectId: "helwett-task",
  storageBucket: "helwett-task.appspot.com",
  messagingSenderId: "873813620815",
  appId: "1:873813620815:web:9c4f4f409d3983cdb9523a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;