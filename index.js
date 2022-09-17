// Declaring the variables
const idPhoto = document.getElementById("id-photo");
const nameLabel = document.getElementById("name-label");
const schoolLabel = document.getElementById("school-label");
const trackLabel = document.getElementById("track-label");
const idLabel = document.getElementById("id-label");
const myPhoto = document.getElementById("my-photo");
const fullName = document.getElementById("fullname");
const school = document.getElementById("school");
const track = document.getElementById("track");
const idNumber = document.getElementById("idNumber");
const downloadBtn = document.getElementById("download-btn");
let imgUploader = "";

// FUnction to display/hide fine print
function showFinePrint(){
  const finePrint = document.querySelector('#fine-print')
  if(finePrint.style.display === 'none'){
    finePrint.style.display = 'block';
  }else{
    finePrint.style.display = 'none';
  }
}

console.log(showFinePrint())
// to show the image on the card 
myPhoto.addEventListener("change", function(){
  // alert(myPhoto.value)
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    imgUploader = reader.result
    document.querySelector('#id-photo').style.backgroundImage=`url(${imgUploader})`
  });
  reader.readAsDataURL(this.files[0]);
})

// to show the value in the input field on the card
function getInputs(){
   nameLabel.innerHTML += fullName.value;
  schoolLabel.innerHTML += school.value;
  trackLabel.innerHTML += track.value;
  idLabel.innerHTML += idNumber.value;
  
}

// Creating the event listener for the select button
document
  .getElementById("select-btn")
  .addEventListener("click", function(event) {
    event.preventDefault();
    getInputs();
    showFinePrint();
  });

// Function to get the card for the download 
let dwnloadCard = () => {
  html2canvas(document.querySelector(".card")).then(canvas => {
    let downloadLink = document.getElementById("download-link"); 
    downloadLink.href = canvas.toDataURL();
    downloadLink.click();
  });
}

  // Creating the event listener for the download button
downloadBtn.addEventListener("click", function(event) {
  event.preventDefault();
  dwnloadCard();
  document.querySelector('.card-info').reset();
  idPhoto.style.backgroundImage = "url('')";
  nameLabel.innerHTML = "Name: ";
  schoolLabel.innerHTML = "School: ";
  trackLabel.innerHTML = "Track: ";
  idLabel.innerHTML = "ID: ";
  
  
})