import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
    apiKey: "****",
  authDomain: "***",
  projectId: "sig7",
  storageBucket: "si****",
  messagingSenderId: "2***",
  appId: "1:*****9",
  measurementId: "G-*****"
});

export const auth = getAuth(app);
export default app;
