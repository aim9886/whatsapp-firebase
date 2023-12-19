import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD-zAea6s3wM1xHOr0e2n5moO-gbaNzhbM",
  authDomain: "what-chat-message.firebaseapp.com",
  projectId: "what-chat-message",
  storageBucket: "what-chat-message.appspot.com",
  messagingSenderId: "548352886869",
  appId: "1:548352886869:web:2142ee765be23dafdaacdc"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)
export const database = getFirestore(app)


// import { initializeApp } from "firebase/app";
// import {getAuth,GoogleAuthProvider} from "firebase/auth"
// import {getFirestore} from "firebase/firestore"

// const firebaseConfig = {
//   apiKey: "AIzaSyD-zAea6s3wM1xHOr0e2n5moO-gbaNzhbM",
//   authDomain: "what-chat-message.firebaseapp.com",
//   projectId: "what-chat-message",
//   storageBucket: "what-chat-message.appspot.com",
//   messagingSenderId: "548352886869",
//   appId: "1:548352886869:web:2142ee765be23dafdaacdc"
// };


// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// const database = getFirestore(app);

// export { auth, provider, app, database};