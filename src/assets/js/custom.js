
// mobile-navbar

function toggleSideNav() {
  if(document.getElementById("mySidenav").style.width == "250px"){
    document.getElementById("mySidenav").style.width = "0px";
  }else{
    document.getElementById("mySidenav").style.width = "250px";
  }
	  
}

function closeSideNav() {
	  document.getElementById("mySidenav").style.width = "0";
}


