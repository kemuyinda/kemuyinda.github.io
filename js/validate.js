
function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  //console.log('TODO - validate the longitude, latitude values before submitting');
}
//Longitude
const longitude = document.getElementById("longitude").value;
const valid_longitude = longitude && (longitude >= -180 || longitude <= 180);
let lonInvalidMessage = document.getElementById("invalid_longitude");
if (!valid_longitude) {
  event.preventDefault();
  lonInvalidMessage.removeAttribute("hidden");
} else {
  lonInvalidMessage.setAttribute("hidden", "true");
}
//Latitude
const latitude = document.getElementById("latitude").value;
const valid_latitude = latitude && (latitude >= -90 || latitude <= 90);
let latInvalidMessage = document.getElementById("latitude-invalid");
if (!valid_latitude) {
  event.preventDefault();
  latInvalidMessage.removeAttribute("hidden");
} else {
  latInvalidMessage.setAttribute("hidden", "true");
}
 
 
 const description = document.getElementById("description").value;
 let descriptionInvalidMessage = document.getElementById(
   "invalidDescription"
 );
 if (!description) {
   event.preventDefault();
   descriptionInvalidMessage.removeAttribute("hidden");
 } else {
   descriptionInvalidMessage.setAttribute("hidden", "true");
 }

 const name = document.getElementById("name").value;
 let nameInvalidMessage = document.getElementById("invalidName");
 if (name) {
  nameInvalidMessage.setAttribute("hidden", "true");
 } 
 else 
 {
  
   event.preventDefault();
   nameInvalidMessage.removeAttribute("hidden");
 }


 
 //date
 const dateObserved = document.getElementById("dateObserved").value;
 let dateObservedInvalidMessage = document.getElementById("invalidDate");
 if (!dateObserved) {
   event.preventDefault();
   dateObservedInvalidMessage.removeAttribute("hidden");
 } else {
   dateObservedInvalidMessage.setAttribute("hidden", "true");
 }

 if (valid_latitude && valid_longitude && name && description && dateObserved) {
   return true;
 } else {
   event.preventDefault();
   console.log("invalid data in form");
   return false;
 }

 
// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
