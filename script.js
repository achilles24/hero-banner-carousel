console.log("prakash");
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".wrapper");
  const stickyImage = document.getElementById("sticky-img");
  const images = [
    "https://via.placeholder.com/400x300?text=Image+1",
    "https://via.placeholder.com/400x300?text=Image+2",
    "https://via.placeholder.com/400x300?text=Image+3",
  ];

  const options = {
    root: null,
    rootMargin: "-50px 0px 0px 0px",
    threshold: 0.5,
  };

  function updateStickyImage(index) {
    stickyImage.style.opacity = 0.5;

    setTimeout(() => {
      stickyImage.src = images[index];

      stickyImage.onload = () => {
        stickyImage.style.opacity = 1;
      };
    }, 200);
  }

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = [...sections].indexOf(entry.target);
        updateStickyImage(index);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});
