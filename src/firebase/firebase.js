import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIwt4MLctr7OFBAA-lb7mrdkyv6LHrRac",
  authDomain: "edition-wallet.firebaseapp.com",
  projectId: "edition-wallet",
  storageBucket: "edition-wallet.appspot.com",
  messagingSenderId: "989143574443",
  appId: "1:989143574443:web:ebe41b1281cf5c6f5b14ee"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;




