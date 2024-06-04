// preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

// scrop to top
const toTop = document.querySelector(".to_top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 400) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn_select");
  const monthlyPackage = document.querySelector(".monthly_packages");
  const yearlyPackage = document.querySelector(".yearly_packages");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("active"));

      this.classList.add("active");
      if (this.getAttribute("data-package") === "monthly") {
        monthlyPackage.classList.add("active");
        yearlyPackage.classList.remove("active");
      } else {
        monthlyPackage.classList.remove("active");
        yearlyPackage.classList.add("active");
      }
    });
  });
});

// counter up

document.addEventListener("scroll", function onScroll() {
  if (window.scrollY >= 190) {
    const counters = document.querySelectorAll(".count");
    const duration = 1500;
    const interval = 10;

    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      const increment = target / (duration / interval); //

      let currentCount = 0;
      const updateCount = () => {
        currentCount += increment;
        if (currentCount < target) {
          counter.innerText = Math.ceil(currentCount);
          setTimeout(updateCount, interval);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
    document.removeEventListener("scroll", onScroll);
  }
});

$(".review").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 700,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".partners").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 700,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});
// Load the YouTube IFrame API
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("youtube_video", {
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  var playIcon = document.getElementById("play_icon");
  var videoWrapper = document.getElementById("video_wrapper");

  playIcon.addEventListener("click", function () {
    videoWrapper.style.display = "block";
    playIcon.style.display = "none";
    event.target.playVideo();
  });
}

// video play/pause

document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll("video");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.5 }
  );

  videos.forEach((video) => {
    observer.observe(video);
  });
});
