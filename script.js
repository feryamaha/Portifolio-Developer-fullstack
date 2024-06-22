//Animation skills
const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    const profileText = document.getElementById('ptext-profile');
    const textParts = [
        { text: 'Hello world, i am => {(', id: 'span1', newLine: true },
        { text: '        ', id: 'span1', newLine: true },
        { text: 'name: "Fernando Moreira",', id: 'span3', newLine: true },
        { text: 'stack: "Developer Fullstack",', id: 'span3', newLine: true },
        { text: 'console.log(`', id: 'span5' },
        { text: 'Happy that you are here meeting me!', id: 'span2' },
        { text: '`);', id: 'span5', newLine: true },
        { text: ')}', id: 'span5' }
    ];
    let partIndex = 0;
    let charIndex = 0;
    let typingDelay = 75;
    let currentSpan;

    function typeNextPart() {
        if (partIndex < textParts.length) {
            const part = textParts[partIndex];
            if (!currentSpan || charIndex === 0) {
                currentSpan = document.createElement('span');
                currentSpan.id = part.id;
                profileText.appendChild(currentSpan);
                if (part.newLine && partIndex !== 0) {
                    profileText.appendChild(document.createElement('br'));
                }
            }

            currentSpan.textContent += part.text[charIndex];
            charIndex++;
            if (charIndex === part.text.length) {
                partIndex++;
                charIndex = 0;
                currentSpan = null;
            }
            setTimeout(typeNextPart, typingDelay);
        }
    }
    typeNextPart();
});

document.querySelector('.ball').addEventListener('click', (e) => {
    e.target.classList.toggle('.ball-move');
    document.body.classList.toggle('white-theme');
});