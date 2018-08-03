
var config = {
    apiKey: "AIzaSyAPOVqTpkPOvnIgg4O_kgbmX2ypMVGNJQk",
    authDomain: "formulaire-5b378.firebaseapp.com",
    databaseURL: "https://formulaire-5b378.firebaseio.com",
    projectId: "formulaire-5b378",
    storageBucket: "formulaire-5b378.appspot.com",
    messagingSenderId: "701284548517"
  };
  firebase.initializeApp(config);

function getInputVal(id){
    return document.getElementById(id).value
}
document.getElementById("contactForm").addEventListener("submit",submitForm)
function submitForm(e)
{
    alert("jvgv")
    e.preventDefault()
    alert("hey")
    var name=getInputVal("name")
    var prenom=getInputVal("prenom")
    var tel=getInputVal("tel")
    var date=getInputVal("date")
    var color=getInputVal("color")

    saveMessage(name,prenom,tel,date,color)
}
var message=firebase.database().ref("formulaire")
function saveMessage(name,prenom,tel,date,color){
    var newMessage=message.push()
    newMessage.set({
        name:name,
        prenom:prenom,
        tel:tel,
        date:date, 
        color:color
         })
}