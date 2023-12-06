document.addEventListener("DOMContentLoaded", function () {
    // Social Media Sharing Functions
    function shareOnFacebook() {
        // Replace 'your-website-url' with the URL you want to share
        const urlToShare = 'https://tyquans03.github.io/Website-/index.html';
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
        window.open(facebookShareUrl, 'Share on Facebook', 'width=600,height=400');
    }
    function shareOnTwitter() {
        // Replace 'your-website-url' and 'your-text' with your desired URL and text
        const urlToShare = 'https://tyquans03.github.io/Website-/index.html';
        const textToShare = 'Click here';
        const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}&text=${encodeURIComponent(textToShare)}`;
        window.open(twitterShareUrl, 'Share on Twitter', 'width=600,height=400');
    }
    // Event listeners for social media sharing buttons
    const shareFacebookButton = document.getElementById("share-facebook");
    const shareTwitterButton = document.getElementById("share-twitter");
    shareFacebookButton.addEventListener("click", shareOnFacebook);
    shareTwitterButton.addEventListener("click", shareOnTwitter);

    
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}