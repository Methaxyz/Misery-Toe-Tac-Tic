//up code here
function enable2(){
    console.log('work with auth js');
}
const ref = firebase.database().ref("game-1");

const signInWithGoogleButton = document.getElementById('signInWithGoogle'); 
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
});