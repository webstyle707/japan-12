window.onscroll = function() { toggleStickyCard() };
const stickycard = document.getElementById('stickycard');

function toggleStickyCard() {
    var pageHeight = document.documentElement.scrollHeight;
    if (window.pageYOffset > pageHeight / 4) {
        stickycard.style.display="block";
        console.log(1);
    } else {
        stickycard.style.display = "none";
    }
  }
  
