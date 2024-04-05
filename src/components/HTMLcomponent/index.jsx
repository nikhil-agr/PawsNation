
import React from "react";
import { useEffect } from "react";
const index = () => {
  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css"
      />
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
  
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .hero {
          width: 100%;
          position: absolute;
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          z-index: -1;
        }
  
        .hero h1 {
          width: 100%;
          color: #c0c0c0;
          font-size: 15vw;
          font-weight: 400;
          letter-spacing: -0.05em;
        }
  
        .hero p {
          font-size: 1.5vw;
          color: #000;
          opacity: 0.35;
        }
  
        .btn {
          position: absolute;
          top: 75%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #0084ff;
          color: #f1f1f1;
          font-size: 15px;
          border-radius: 30px;
          padding: 1em 2em;
          cursor: pointer;
          z-index: 2;
        }
  
        .img-gallery-container {
          width: 100vw;
          padding-top: 100vh;
        }
  
        .img {
          position: relative;
          margin-bottom: 10px;
          width: 400px;
          height: 500px;
          overflow: hidden;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
  
        .img:nth-child(1),
        .img:nth-child(3) {
          left: 75%;
        }
  
        .img:nth-child(2),
        .img:nth-child(4) {
          left: 25%;
        }
  
        .img.reorder {
          position: absolute;
          top: 47.5%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 250px;
          height: 325px;
        }
  
        .img.reorder:nth-child(1) {
          transform: translate(-50%, -50%) rotate(10deg);
        }
  
        .img.reorder:nth-child(2) {
          transform: translate(-50%, -50%) rotate(-5deg);
        }
  
        .img.reorder:nth-child(3) {
          transform: translate(-50%, -50%) rotate(2deg);
        }
  
        .img.reorder:nth-child(4) {
          transform: translate(-50%, -50%) rotate(-2deg);
        }
      </style>
    </head>
    <body>
      <div class="img-gallery" data-scroll-container>
        <div class="img-gallery-container order" data-scroll>
          <div class="img reorder">
            <img src="./Images/breeds.webp" alt="Dog Image" />
          </div>
          <div class="img reorder">
            <img src="./Images/breeds.webp" alt="Dog Image" />
          </div>
          <div class="img reorder">
            <img src="./Images/breeds.webp" alt="Dog Image" />
          </div>
          <div class="img reorder">
            <img src="./Images/breeds.webp" alt="Dog Image" />
          </div>
        </div>
      </div>
      <div class="hero">
        <h1>PawsNation</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div class="btn">Explore Breeds</div>
      
      <!--<script id='loco' src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.min.js"></script>
      <script id='gsap' src="https://unpkg.co/gsap@3/dist/gsap.min.js"></script>
      <script id='flip' src="https://assets.codepen.io/16327/Flip.min.js"></script>
      <script id='ce' src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/CustomEase.min.js"></script> -->
      <script id="inline-script">
        const scroller = new LocomotiveScroll({
          el: document.querySelector("[data-scroll-container]"),
          smooth: true,
        });
  
        gsap.registerPlugin(Flip);
        gsap.registerPlugin(CustomEase);
        CustomEase.create("cubic", "0.83, 0, 0.17, 1");
  
        const gallery = document.querySelector(".img-gallery-container");
        const images = gsap.utils.toArray(".img");
        let rotationValues = [10, -5, 2, -2];
  
        let isFlip = false;
        function applyRotation() {
          images.forEach((img, index) => {
            const rotation = isFlip ? 0 : rotationValues[index];
            gsap.to(img, {
              rotate: rotation,
              duration: 2,
              ease: "cubic",
              delay: 0.155,
            });
          });
        }
  
        const button = document.querySelector(".btn");
        button.addEventListener("click", () => {
          console.log('clicked');
          isFlip = !isFlip;
          setTimeout(() => {
            button.textContent = isFlip ? "Hide All Images" : "Explore Breeds";
          }, 1000);
  
          let state = Flip.getState(".img-gallery-container, .img");
          gallery.classList.toggle("order");
          images.forEach((img) => {
            img.classList.toggle("reorder");
          });
          Flip.from(state, {
            absolute: true,
            duration: 2,
            rotate: 0,
            stagger: 0.05,
            ease: "cubic",
            onStart: () => {
              applyRotation();
            },
            onComplete: () => {
              scroller.update();
            },
          });
        });
      </script>
    </body>
  </html>  
  `;

  // useEffect(() => {
  //   // Function to load external scripts
  //   const loadScript = (src) => {
  //     return new Promise((resolve, reject) => {
  //       const script = document.createElement('script');
  //       script.src = src;
  //       script.onload = resolve;
  //       script.onerror = reject;
  //       document.body.appendChild(script);
  //     });
  //   };

  //   // Load external scripts
  //   Promise.all([
  //     loadScript('https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.min.js'),
  //     loadScript('https://unpkg.co/gsap@3/dist/gsap.min.js'),
  //     loadScript('https://assets.codepen.io/16327/Flip.min.js'),
  //     loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/CustomEase.min.js')
  //   ])
  //   .then(() => {
  //     // JavaScript code that interacts with the loaded libraries
  //     // const scroller = new LocomotiveScroll({
  //     //   el: document.querySelector("[data-scroll-container]"),
  //     //   smooth: true,
  //     // });

  //     evalInlineScript();

  //     // Other JavaScript logic...
  //   }).catch((error) => {
  //     console.error('Error loading scripts:', error);
  //   });
  // }, []);

  // useEffect(() => {
  //   // Execute JavaScript logic after component mounts
  // }, []);

  const executeScripts = () => {
    // Use document.querySelector or similar to find script elements
    const scripts = document.querySelectorAll("script");
    scripts.forEach((script) => {
      if (!script.src) {
        // Check for inline scripts
        eval(script.textContent); // Not recommended for security reasons, consider alternatives
      }
    });
  };
  useEffect(() => {
    if (htmlContent) {
      executeScripts(); // Call script execution after rendering
    }
  }, []);

  // const evalInlineScript = () => {
  //   // Evaluate inline script content using eval()
  //   eval(document.querySelector("#inline-script").textContent);
  //   // eval(document.getElementById("loco").src)
  // };
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default index;
