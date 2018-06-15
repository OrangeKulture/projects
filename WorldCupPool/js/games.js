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

    // Save values
    const logoutBtn = document.getElementById('logout');
    const auth = firebase.auth();

    // Listeners
    logoutBtn.addEventListener('click', e => {
        auth.signOut();
        window.location = "index.html";
    })

    $('.game-btn > button').on('click',(e) => {
        if(!e) e = window.event;
        let gameSelect = e.target.id;
        let score1 = document.getElementById(`g${gameSelect}s1`);
        let score2 = document.getElementById(`g${gameSelect}s2`);        
        let myTeam1 = $(`#g${gameSelect}t1`).text();
        let myTeam2 = $(`#g${gameSelect}t2`).text();

        let myScore1 = score1.value;
        let myScore2 = score2.value;


        if(myScore1 === "" || myScore2 === "" || isNaN(myScore1) || isNaN(myScore2)) {
            toastr.warning('Please fill out the scores before submitting');
        }else {
            console.log(`the title is Game${gameSelect}, team 1 is: ${myTeam1}, team 2 is: ${myTeam2}, with score for ${myTeam1}: ${myScore1}, and score for ${myTeam2}: ${myScore2}`)
        }


    })
    

    //Real time listener
    auth.onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            loggedUser = firebaseUser.uid;
            // toastr.success('You are now logged in!')

            // Populate the board
            // dbRef.ref("profiles/"+loggedUser+"/games")
            // .on('child_added', (snap) => {
            //     console.log(snap.val());
            // })

            dbRef.ref("profiles/"+loggedUser+"/info")
            .on('child_added', (snap) => {
                let dispName = snap.val();
                $('#dispUser').text(dispName);
            })

        }else {
            window.location = "index.html";
        }
    });

})