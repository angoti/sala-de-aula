import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCHLbzNZUgHvPRTT4HY3iNJaKu2EpRun5Q",
    authDomain: "sala-de-aula-dd128.firebaseapp.com",
    projectId: "sala-de-aula-dd128",
    storageBucket: "sala-de-aula-dd128.appspot.com",
    messagingSenderId: "66598694186",
    appId: "1:66598694186:web:94b38249f8764c4f6a4253",
    measurementId: "G-9P49PT1MQ0"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();


// Sign in and check or create account in firestore
const signInWithGoogle = async () => {
    try {
        console.log("teste");
        const response = await auth.signInWithPopup(googleProvider);
        console.log(response.user);
        console.log(response);
        const user = response.user;
        console.log(`User ID - ${user.uid}`);
        const querySnapshot = await db
            .collection("users")
            .where("uid", "==", user.uid)
            .get();
        if (querySnapshot.docs.length === 0) {
            // create a new user
            await db.collection("users").add({
                uid: user.uid,
                enrolledClassrooms: [],
            });
        }
    } catch (err) {
        alert('erro')
        alert(err.message);
    }
};

const logout = () => {
    auth.signOut();
};

export { app, auth, db, signInWithGoogle, logout };