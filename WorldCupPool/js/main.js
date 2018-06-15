$(document).ready(function(){

    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyCVM_-RTKoQnQXnpCoks08-s5s5FjcGDzk",
        authDomain: "world-cup-pool-82286.firebaseapp.com",
        databaseURL: "https://world-cup-pool-82286.firebaseio.com",
        projectId: "world-cup-pool-82286",
        storageBucket: "world-cup-pool-82286.appspot.com",
        messagingSenderId: "152044465811"
    };
    firebase.initializeApp(config);

    // Database references

    const dbRef = firebase.database();
    

    // Save values
    const logEmail = document.getElementById('log-email');
    const logPwd = document.getElementById('log-pwd');
    const createEmail = document.getElementById('create-email');
    const createPwd = document.getElementById('create-pwd');
    const logBtn = document.getElementById('log-btn');
    const createBtn = document.getElementById('create-btn');
    const auth = firebase.auth();


    // Listeners
    createBtn.addEventListener('click', e => {

        let email = createEmail.value;
        let pwd = createPwd.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email,pwd);
        promise.catch(e => toastr.warning(e.message));
        
    });

    logBtn.addEventListener('click', e => {
        let email = logEmail.value;
        let pwd = logPwd.value;
        
        auth.signInWithEmailAndPassword(email, pwd);
    })


        // Real time listener
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser){
                window.location = "games.html";
            }else {
                // toastr.info('Please sign in to continue');
            }
        });


})