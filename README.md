<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css"
      rel="stylesheet"
    />
    <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
    <link rel="stylesheet" href="takeover.css" />
    <title>Scroll Animation</title>
  </head>
  <body>
    <div class="container container-root responsivegrid">
      <div
        class="global naviagtion"
        style="height: 80px; position: relative"
      ></div>
      <header>
        <h1>People</h1>
        <h2>
          Impacting thee livs of billions around the globe is a responsibility
          we take seriously
        </h2>
      </header>
      <div class="mdc-layout-grid">
        <div class="mdc-layout-grid__inner">
          <!-- Repeat this for each image -->
          <div class="image-section mdc-layout-grid__cell--span-12">
            <img src="takeover.jpg" class="image" />
            <div class="text-box">
              <p>Image Description Text 1</p>
            </div>
          </div>
          <!-- <div class="image-section mdc-layout-grid__cell--span-12">
            <img src="takeover.jpg" class="image" />
            <div class="text-box">
              <p>Image Description Text 2</p>
            </div>
          </div> -->
        </div>
      </div>
    </div>

    <script src="takeover.js"></script>
  </body>
</html>


document.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(".image-section");

  sections.forEach((section) => {
    const image = section.querySelector(".image");
    const textBox = section.querySelector(".text-box");
    const rect = section.getBoundingClientRect();

    // Check if the image is at or below 50vh
    if (rect.top <= window.innerHeight / 2 && rect.top >= 0) {
      //   section.style.overflow = "visible";
      const scaleProgress = 1 - rect.top / (window.innerHeight / 2);
      image.style.transform = `scale(${1 + scaleProgress * 0.5})`;
      image.style.filter = `brightness(${1 - scaleProgress * 0.3})`;

      // Gradually show the text box and adjust its position
      textBox.style.bottom = `${-10 + scaleProgress * 10}vh`;
      textBox.style.opacity = scaleProgress;
    } else {
      // Reset image and text box styles if out of scroll range
      //   section.style.overflow = "hidden";
      image.style.transform = "scale(1)";
      image.style.filter = "brightness(1)";
      textBox.style.opacity = "0";
      textBox.style.bottom = "-10vh";
    }

    // If image reaches top (0vh), make it full width with text at the bottom
    if (rect.top <= 0) {
      image.style.transform = "scale(1.5)";
      image.style.filter = "brightness(0.7)";
      textBox.style.bottom = "0";
      textBox.style.opacity = "1";
    }
  });
});

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  overflow-x: hidden;
}

.container-root {
  padding: 0 24px;
  float: none;
  margin: 0 auto;
  max-width: 1280px;
  box-sizing: border-box;
}

header {
  text-align: left;
  padding: 20px;
  h1 {
    margin-bottom: 12px;
  }
}

.mdc-layout-grid {
  display: grid;
  gap: 2rem;
}

.image-section {
  position: relative;
  width: 100%;
  /* overflow: hidden; */
}

.image {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  transition: transform 0.3s ease, filter 0.3s ease;
  transform-origin: top;
}

/* Gradient overlay (if needed for more control over fade) */
/* .image-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 1;
} */

.text-box {
  position: absolute;
  bottom: -10vh;
  left: 50%;
  transform: translateX(-50%);
  width: 420px;
  height: 270px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s, bottom 0.3s;
}
