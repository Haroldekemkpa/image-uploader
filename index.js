let profilePicture = document.getElementById('profile-pic');
let inputFile = document.getElementById('input-file');
let profile = document.querySelector('.card');

inputFile.onchange = function() {
    profilePicture.src = URL.createObjectURL(inputFile.files[0])
    
}
