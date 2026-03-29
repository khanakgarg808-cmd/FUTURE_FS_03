// Loader animation

window.addEventListener("load",function(){

setTimeout(function(){

document.getElementById("loader").style.display="none";

},1500);

});

// Booking form

document.getElementById("bookingForm").addEventListener("submit",function(e){

e.preventDefault();

alert("Your table booking request has been sent!");

});