$(document).ready(function(){

    //Database configuration and initialization
    const config = {
        apiKey: "AIzaSyBIGlr0I219yuDPcgNp4EGD5fuDE8Pxg_k",
        authDomain: "btcview-999b9.firebaseapp.com",
        databaseURL: "https://btcview-999b9.firebaseio.com",
        projectId: "btcview-999b9",
        storageBucket: "btcview-999b9.appspot.com",
        messagingSenderId: "87362048017"
    }
    
    firebase.initializeApp(config);

    // Creating DB references
    const display = document.getElementById('showContent');
    const dbObj = firebase.database().ref().child('agents');
    

    //Listening for changes on DB and populating the Adress Tracker
    dbObj.on('child_added', (snap) => {
        let resp = snap.val();
        $('#showContent').append(`
            <div class="addTrackItem">
                <div class="t-add">${resp.address}</div>
                <div class="t-agent">${resp.agentID}</div>
            </div>
        `);
    })
    
    // New Address Generation
    $('.genBTN').on('click', ()=> {

        let userInput = $('#agent').val(),
            newAdd,addID
        let testString = /[^A-Za-z0-9]+/g;

        if(userInput.length<1){
            toastr.warning('Invalid Agent ID')
            return;
        }
        
        $.post('/generate',{},(data)=>{
            newAdd = data.address;
            addID = data.id;
            let route = userInput.replace(testString,"");
            firebase.database().ref('agents/'+route).set({
                agentID: userInput,
                address: newAdd,
                addressID: addID
            })
            $('.addField').text(newAdd);
        })
    })

    //Copy to Clipboard Logic
    $('.copy').on('click', ()=> {
        $('#myField').focus();
        document.execCommand('selectAll',false,null);
        document.execCommand('copy');
        if($('#myField').text().length>0){
            toastr.success('Address Copied');
        }else {
            toastr.error('Nothing Selected');
            $(':focus').blur()
        }
        
    })

    // Address output animation 
    $('#agent').on('keyup',()=>{
        $('.screen').css('visibility', 'visible');
    })



});