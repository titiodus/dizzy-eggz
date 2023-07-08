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
  let year = idNumber.value.split('/');
  let currentyear = Number('2' + year[2]) + 1;
  finePrint.innerHTML = `Valid Until April ${currentyear} REMOTE: FULL TIME`;
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
   nameLabel.innerHTML = fullName.value;
  schoolLabel.innerHTML = school.value;
  trackLabel.innerHTML = track.value;
  idLabel.innerHTML = idNumber.value;
  
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
let dwnloadCard = (format = 'jpg') => {
  let mimeType;

  // Determine the MIME type based on the format
  if (format === 'png') {
    mimeType = 'image/png';
  } else if (format === 'jpeg') {
    mimeType = 'image/jpeg';
  } else if (format === 'webp') {
    mimeType = 'image/webp';
  } else {
    // Default to jpg if the format is not specified
    format = 'jpg';
    mimeType = 'image/jpg';
  }

  html2canvas(document.querySelector(".card")).then(canvas => {
    let downloadLink = document.getElementById("download-link"); 
    downloadLink.href = canvas.toDataURL(mimeType);
    downloadLink.download = `MyAltSchoolIdCard.${format}`; // Specify the filename with the desired format extension
    downloadLink.click();
  });
}

  // Creating the event listener for the download button
downloadBtn.addEventListener("click", function(event) {
  event.preventDefault();
  let format = prompt('Enter desired image format (jpg, jpeg, webp, or png):')
  dwnloadCard(format);
  document.querySelector('.card-info').reset();
  idPhoto.style.backgroundImage = "url('')";
  nameLabel.innerHTML = "";
  schoolLabel.innerHTML = "";
  trackLabel.innerHTML = "";
  idLabel.innerHTML = "";
  
  
})
