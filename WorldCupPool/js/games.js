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
    let loggedUser = null;

    // Database reference
    const dbRef = firebase.database();

    //DOM Nodes
    const score1Game1 = document.getElementById('score1');
    const score2Game1 = document.getElementById('score2');
    const score3 = document.getElementById('score3');
    const score4 = document.getElementById('score4');
    const game1Btn = document.getElementById('game1-btn');
    const game2Btn = document.getElementById('game2-btn');

    // Save values
    const logoutBtn = document.getElementById('logout');
    const auth = firebase.auth();

    // Listeners
    // logoutBtn.addEventListener('click', e => {
    //     auth.signOut();
    //     window.location = "index.html";
    // })

    // game1Btn.addEventListener('click', e => {
    //     let score1 = score1Game1.value;
    //     let score2 = score2Game1.value;
        
    //     dbRef.ref("profiles/"+loggedUser+"/Game1")
    //     .set({
    //         'RUS': score1,
    //         'KDZ': score2,
    //         'time': Date.now()
    //     })


    // })


    //Real time listener
    auth.onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            loggedUser = firebaseUser.uid;
            // toastr.success('You are now logged in!')

            // Populate the board
            dbRef.ref("profiles/"+loggedUser)
            .on('child_added', (snap) => {
                console.log(snap.val());
            })

        }else {
            window.location = "index.html";
        }
    });

})