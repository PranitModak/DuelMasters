jQuery(document).ready(function($) {
	    
});

function onSignIn(googleUser) {
    console.log(googleUser);
        var profile = googleUser.getBasicProfile();
        console.log(profile);
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
    // document.location.href = "/lobby";
  }