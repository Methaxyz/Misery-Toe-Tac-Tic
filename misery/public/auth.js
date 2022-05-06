//up code here
function enable2(){
    console.log('work with auth js');
}

const signInWithGoogleButton = document.getElementById('signInWithGoogle');
// const signUpWithGoogleButton = document.getElementById('signUpWithGoogle');  
const auth = firebase.auth();
const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(googleProvider)
    .then(() => {
     window.location.assign('./profile');
     console.log('Full Name: ' + profile.getName());
    })
    .catch(error => {
     console.error(error);
    })
} 
signInWithGoogleButton.addEventListener('click', signInWithGoogle);
//signUpWithGoogleButton.addEventListener('click', signUpWithGoogle);
firebase.auth().onAuthStateChanged((user) => {
    console.log('User: ', user);
    //alert(user.displayName);
    //document.getElementById("name").innerHTML = user.displayName;
    //console.log("Sign-in provider: " + profile.providerId);
    //console.log("  Provider-specific UID: " + profile.uid);
    //console.log("  Name: " + profile.displayName);
    //console.log("  Email: " + profile.email);
    //console.log("  Photo URL: " + profile.photoURL);
    //getList(user);
    //setupUI(user);
    if (user !== null) {
        document.getElementById("feedback").innerHTML = "Wellcome";
        document.getElementById("name").innerHTML = user.displayName;
        setupUI();
        function setimage(){
            var img = document.getElementById("profile");
            img.src = user.photoURL;
        }
        setimage();
    }
});
const Name = document.querySelector('#name');
const btnLogout = document.querySelector('#btnLogout');
btnLogout.addEventListener('click', ()=>{
    firebase.auth().signOut();
    console.log('Logout completed.');
    Name.innerHTML = ``;
    document.getElementById("feedback").innerHTML = "Please sign in with google account.";
    var img = document.getElementById("profile");
        img.src = "image/user-circle.png";
    setupUI2();
});

const logoutItems = document.querySelectorAll('.logged-out');
const loginItems = document.querySelectorAll('.logged-in');

function setupUI(user) {
    if (user) {
        loginItems.forEach(item => item.style.display = 'inline-block');
        logoutItems.forEach(item => item.style.display = 'none'); //none
    } else {
        loginItems.forEach(item => item.style.display = 'none');
        logoutItems.forEach(item => item.style.display = 'inline-block'); //inline-block
    }
}
const Multiplay = document.getElementById('mode1');
Multiplay.addEventListener('click', setroomUI);

const Setroom = document.querySelectorAll('.setroom');
function setroomUI() {
    document.getElementById("mode1").style.display = "none";
    document.getElementById("mode2").style.display = "none";
    document.getElementById("back").style.display = "inline-block";
    Setroom.forEach(item => item.style.display = 'inline-block');
}
const Botplay = document.getElementById('mode2');
Botplay.addEventListener('click', setbotUI);
function setbotUI() {
    document.getElementById("mode1").style.display = "none";
    document.getElementById("mode2").style.display = "none";
    document.getElementById("name").style.display = "none";
    document.getElementById("profile").style.display = "none";
    document.getElementById("btnLogout").style.display = "none";
    document.getElementById("popupbtn").style.display = "none";
    document.getElementById("tableBot").style.display = "inline-block";
    document.getElementById("botRe").style.display = "block";
    document.getElementById("text").style.display = "block";
    document.getElementById("leaveBot").style.display = "block";
}
function setupUI2(user) {
    if (user == null) {
        loginItems.forEach(item => item.style.display = 'inline-block');
        logoutItems.forEach(item => item.style.display = 'none');
        document.getElementById("mode1").style.display = "none";
        document.getElementById("mode2").style.display = "none";
        document.getElementById("back").style.display = "none";
        Setroom.forEach(item => item.style.display = 'none');
        document.getElementById("waiting-text").style.display = "none";
        document.getElementById("grid3").style.display = "none";
        document.getElementById("restart").style.display = "none";
        document.getElementById("back").style.display = "none";
        document.getElementById("leave").style.display = "none";

    }
}
setupUI2();
// function signUpWithGoogle(){
//     window.open("https://accounts.google.com/signup/v2/webcreateaccount?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dcreate-account-button&flowName=GlifWebSignIn&flowEntry=SignUp", "_blank");
// }


const Goback = document.getElementById('back');
Goback.addEventListener('click', goback);
function goback() {
    Setroom.forEach(item => item.style.display = 'none');
    document.getElementById("mode1").style.display = "inline-block";
    document.getElementById("mode2").style.display = "inline-block";
    document.getElementById("back").style.display = "none";
    document.getElementById("feedback").style.display = "block";
    document.getElementById("name").style.display = "block";
    document.getElementById("profile").style.display = "inline-block";
    document.getElementById("btnLogout").style.display = "block";
    document.getElementById("popupbtn").style.display = "block";
}
function backbot() {
    document.getElementById("mode1").style.display = "inline-block";
    document.getElementById("mode2").style.display = "inline-block";
    document.getElementById("name").style.display = "block";
    document.getElementById("profile").style.display = "inline-block";
    document.getElementById("btnLogout").style.display = "block";
    document.getElementById("popupbtn").style.display = "block";
    document.getElementById("tableBot").style.display = "none";
    document.getElementById("botRe").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("leaveBot").style.display = "none";
}
const Goroom1 = document.getElementById('room1');
Goroom1.addEventListener('click', goroom1);

function goroom1() {
    document.getElementById("waiting-text").style.display = "block";
    document.getElementById("grid3").style.display = "inline-block";
    document.getElementById("restart").style.display = "block";
    document.getElementById("back").style.display = "none";
    document.getElementById("leave").style.display = "block";
    document.getElementById("px").style.display = "inline-block";
    document.getElementById("po").style.display = "inline-block";
    Setroom.forEach(item => item.style.display = 'none');
    document.getElementById("feedback").style.display = "none";
    document.getElementById("name").style.display = "none";
    document.getElementById("profile").style.display = "none";
    document.getElementById("btnLogout").style.display = "none";
    document.getElementById("popupbtn").style.display = "none";
    document.getElementById("lobby").innerHTML = "Room1";
    document.getElementById("btnStartGame").style.display = "block";
    document.getElementById("score-x").style.display = "block";
    document.getElementById("score-o").style.display = "block";
   
}
const Goroom2 = document.getElementById('room2');
Goroom2.addEventListener('click', goroom2);

function goroom2() {
    document.getElementById("waiting-text2").style.display = "block";
    document.getElementById("grid4").style.display = "inline-block";
    document.getElementById("restart2").style.display = "block";
    document.getElementById("back").style.display = "none";
    document.getElementById("leave2").style.display = "block";
    document.getElementById("px2").style.display = "inline-block";
    document.getElementById("po2").style.display = "inline-block";
    Setroom.forEach(item => item.style.display = 'none');
    document.getElementById("feedback").style.display = "none";
    document.getElementById("name").style.display = "none";
    document.getElementById("profile").style.display = "none";
    document.getElementById("btnLogout").style.display = "none";
    document.getElementById("popupbtn").style.display = "none";
    document.getElementById("lobby").innerHTML = "Room2";
    document.getElementById("btnStartGame2").style.display = "block";
    document.getElementById("score-x2").style.display = "block";
    document.getElementById("score-o2").style.display = "block";
   
}
const Leave = document.getElementById('leave');
Leave.addEventListener('click', Goleave);
function Goleave() {
    document.getElementById("waiting-text").style.display = "none";
    document.getElementById("grid3").style.display = "none";
    document.getElementById("restart").style.display = "none";
    Setroom.forEach(item => item.style.display = 'inline-block');
    document.getElementById("back").style.display = "inline-block";
    document.getElementById("leave").style.display = "none";
    document.getElementById("px").style.display = "none";
    document.getElementById("po").style.display = "none";
    document.getElementById("feedback").style.display = "block";
    document.getElementById("name").style.display = "block";
    document.getElementById("profile").style.display = "inline-block";
    document.getElementById("btnLogout").style.display = "block";
    document.getElementById("popupbtn").style.display = "block";
    document.getElementById("lobby").innerHTML = "";
    document.getElementById("px2").style.display = "none";
    document.getElementById("po2").style.display = "none";
    document.getElementById("btnStartGame").style.display = "none";
    document.getElementById("score-x").style.display = "none";
    document.getElementById("score-o").style.display = "none";
    
    
}
const Leave2 = document.getElementById('leave2');
Leave2.addEventListener('click', Goleave2);
function Goleave2() {
    document.getElementById("waiting-text2").style.display = "none";
    document.getElementById("grid4").style.display = "none";
    document.getElementById("restart2").style.display = "none";
    Setroom.forEach(item => item.style.display = 'inline-block');
    document.getElementById("back").style.display = "inline-block";
    document.getElementById("leave2").style.display = "none";
    document.getElementById("px2").style.display = "none";
    document.getElementById("po2").style.display = "none";
    document.getElementById("feedback").style.display = "block";
    document.getElementById("name").style.display = "block";
    document.getElementById("profile").style.display = "inline-block";
    document.getElementById("btnLogout").style.display = "block";
    document.getElementById("popupbtn").style.display = "block";
    document.getElementById("lobby").innerHTML = "";
    document.getElementById("px2").style.display = "none";
    document.getElementById("po2").style.display = "none";
    document.getElementById("btnStartGame2").style.display = "none";
    document.getElementById("score-x2").style.display = "none";
    document.getElementById("score-o2").style.display = "none";
    
    
}

let popup = document.querySelector(".popup"),
    button = document.querySelector(".btnup");

button.addEventListener("click", openPop);

function openPop(){
  popup.style.display = "Block";
  console.log("nok");
}

window.addEventListener("click", closePop);

function closePop(e){
  if(e.target == popup) {
  popup.style.display = "none";
}
}