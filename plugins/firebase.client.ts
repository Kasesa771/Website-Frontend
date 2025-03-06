
// plugins/firebase.client.ts
import { defineNuxtPlugin } from '#app';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

export default defineNuxtPlugin(() => {
  // Your web app's Firebase configuration

  const firebaseConfig = {
    apiKey: "AIzaSyBO-Wj0N3upz4hc7dXJogVbYSLmyvp0rsQ",
    authDomain: "taxi-9ba47.firebaseapp.com",
    databaseURL: "https://taxi-9ba47.firebaseio.com",
    projectId: "taxi-9ba47",
    storageBucket: "taxi-9ba47.appspot.com",
    messagingSenderId: "666457075714",
    appId: "1:666457075714:web:2543938216c47e00baf71b",
  };


  // Initialize Firebase app
  const firebaseApp = initializeApp(firebaseConfig);
  const storage = getStorage(firebaseApp);

  // Make Firebase and storage accessible globally
  return {
    provide: {
      storage,
    },
  };
});
