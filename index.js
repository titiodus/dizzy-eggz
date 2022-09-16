// Declaring the variables
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

myPhoto.addEventListener("change", function(){
  // alert(myPhoto.value)
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    imgUploader = reader.result
    document.querySelector('#id-photo').style.backgroundImage=`url(${imgUploader})`
  });
  reader.readAsDataURL(this.files[0]);
})

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
  });

let dwnloadCard = () => {
  html2canvas(document.querySelector(".card")).then(canvas => {
    let downloadLink = document.getElementById("download-link");
    console.log(canvas);
    // document.body.appendChild(canvas);
    downloadLink.href = canvas.toDataURL();
    downloadLink.click();
  });
}

  // Creating the event listener for the download button
downloadBtn.addEventListener("click", function(event) {
  event.preventDefault();
  dwnloadCard();
  // downloadBtn.href = document.querySelector("#id-card").toDataURL();
  // downloadBtn.download = "id-card.png";
})