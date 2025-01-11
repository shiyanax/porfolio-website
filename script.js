// Run typing effect

function runTypingEffect(params) {
    const text = 'Hi, I\ ’m Shiyam.'
    console.log(text);
    const typingElement = document.getElementById('typingText');
    const typingDelay = 100;

    typeText(text, typingElement, typingDelay )
}

function typeText(text, typingElement, typingDelay ) {
    for (let index = 0; index < text .length; index++) {
        setTimeout(() => {
            typingElement.textContent += text.charAt(index)
        }, typingDelay * index)
        
    }
}

document.addEventListener("DOMContentLoaded", runTypingEffect)