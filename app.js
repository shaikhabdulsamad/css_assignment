// function myFunction() {
//     document.getElementById("myDIV").className = "show";
//   }

  function myFunction() {
    const navs = document.querySelectorAll('.small_screen')
    
    navs.forEach(nav => nav.classList.toggle('show'));
  }