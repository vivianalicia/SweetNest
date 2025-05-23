function goToProfile(event) {
  event.preventDefault();
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  if(loggedInUser){
    window.location.href="../html/profile.html"
  }
  else{
     window.location.href="../html/registration.html"
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  if (loggedInUser && loggedInUser.pic) {
    const navProfileImg = document.getElementById("navProfileImg");
    if (navProfileImg) {
      navProfileImg.src = loggedInUser.pic;
    }
  }
});