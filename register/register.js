import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Initialize Firebase

const firebaseConfig = {
    apiKey: "AIzaSyBwtLmeg_pDR0T3BPenjItpdY5FT_n_JCM",
    authDomain: "wicked-c5531.firebaseapp.com",
    databaseURL: "https://wicked-c5531-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "wicked-c5531",
    storageBucket: "wicked-c5531.appspot.com",
    messagingSenderId: "799803727641",
    appId: "1:799803727641:web:c07c2bcdca0511c11eaf88",
    measurementId: "G-X0841D46VG"
};

const app = initializeApp(firebaseConfig);

// rest of the code

const submit=document.getElementById('register-btn')

submit.addEventListener("click",function(event){
    event.preventDefault()

    const email=document.getElementById('email_input').value
    const password=document.getElementById('pass_input').value

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("Account Created!");
        print(user)
        window.location.href="https://get-wicked.uk.to";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
  });
})


