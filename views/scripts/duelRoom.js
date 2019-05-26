function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    document.location.href = "/"
  }
  function onLoad() {
  gapi.load('auth2', function() {
  gapi.auth2.init();
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.then((data)=>{
    console.log(data);
    var googleUSer = data.currentUser.get();
    var profile = googleUSer.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  })
});
}