const animationScript = ["Front End Developer", "React.js Developer"];
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingSpeed = 200;
const backSpeed = 100;
const loop = true;

function typeEffect(element) {
  const currentText = animationScript[currentTextIndex];

  if (isDeleting) {
    element.textContent = currentText.slice(0, currentCharIndex--);

    if (currentCharIndex === 0) {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % animationScript.length; // Loop through the strings
    }
  } else {
    element.textContent = currentText.slice(0, currentCharIndex++);

    if (currentCharIndex === currentText.length) {
      isDeleting = true;
    }
  }
}

function startTyping() {
  const elements = document.querySelectorAll(".typing, .typing2");
  elements.forEach((element) => {
    setInterval(() => typeEffect(element), typingSpeed);
  });
}

startTyping();
