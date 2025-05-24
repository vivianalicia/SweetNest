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
  const loginWarning = document.getElementById("login-warning");
  const feedbackContainer = document.getElementById("feedback-form");
  if (loggedInUser && loggedInUser.pic) {
    const navProfileImg = document.getElementById("navProfileImg");
    if (navProfileImg) {
      navProfileImg.src = loggedInUser.pic;
    }
  }
  if(!loggedInUser){
    loginWarning.style.display = "block";
    feedbackContainer.style.display = "none";
  }
});
function submitFeedback() {
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

  const feedbackText = document.getElementById("feedback").value.trim();
  if (feedbackText == "") {
    return;
  }
  loggedInUser.feedback = feedbackText;
  sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

  //update ke arraynya

  let users = JSON.parse(sessionStorage.getItem("users") || "[]");
  const index = users.findIndex(user => user.username ===loggedInUser.username);
  if(index !== -1){
    users[index].feedback = feedbackText;
    sessionStorage.setItem("users", JSON.stringify(users));
    window.location.href = "../index.html"
  }
}