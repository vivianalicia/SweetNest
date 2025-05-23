const uploadInput = document.getElementById('upload-photo');
const profileImg = document.getElementById('profile-pict');
const navProfileImg = document.getElementById('navProfileImg');

    document.addEventListener("DOMContentLoaded", function(e) {
    const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    navProfileImg.src=loggedInUser.pic;  
    if (loggedInUser && loggedInUser.pic) {  
        profileImg.src = loggedInUser.pic;
        navProfileImg.src = e.target.result;
        navProfileImg.src=loggedInUser.pic;
    }
});
    
    uploadInput.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                profileImg.src = e.target.result;
                navProfileImg.src = e.target.result; 
                let loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
                if (loggedInUser) {
                    loggedInUser.pic = e.target.result;
                    sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

                    let users = JSON.parse(sessionStorage.getItem("users") || "[]");  
                    const index = users.findIndex(u => u.username === loggedInUser.username);  
                    if (index !== -1) {
                        users[index].pic = e.target.result;
                        sessionStorage.setItem("users", JSON.stringify(users)); 
                    }
                }
            }

            reader.readAsDataURL(file);
        }
    });
    function goToProfile(event) {
  event.preventDefault();
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  if(loggedInUser){
    window.location.href="../html/profile.html"
     navProfileImg.src = loggedInUser.pic;
  }
  else{
     window.location.href="../html/registration.html"
  }
}