// for tab
function openPage(evt, pageName) {
  var i, tabcontent, tablinks;

  // Hide all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove active class from tab links
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  // Show the selected tab content
  document.getElementById(pageName).style.display = "block";

  // Add an "active" class to the button that opened the tab
  evt.currentTarget.className += " active";
}

// By default, show the first tab
document.getElementById("Page1").style.display = "block";
document.getElementsByClassName("tablinks")[0].className += " active";
