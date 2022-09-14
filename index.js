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
  const data = {nameLabel, schoolLabel, trackLabel, idLabel}
  // console.log(data)
}


// Creating the event listener
document
  .getElementById("select-btn")
  .addEventListener("click", function(event) {
    event.preventDefault();
    getInputs();
    // nameLabel.innerHTML = fullName.value;
//     // photoLoader()
//     let photo = myPhoto.value;
//     let name = fullName.value;
//     let mySchool = school.value;
//     let myTrack = track.value;
//     let myIdNumber = idNumber.value;
//     alert(` My name is ${name}. I am a student in ALtSchool Africa and enrolled in ${mySchool}. My track is ${myTrack} and my ID Number is ${myIdNumber}`);
//     // alert(myTrack)

//     // console.log(e.target.value)
  });
