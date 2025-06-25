
//Textanimation operation

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animText");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const el = entry.target;
                const fullText = el.getAttribute("data-text");
                let i = 0;
                const speed = 30; //Typing speed ms

                const type = () => {
                    if(i < fullText.length) {
                        el.textContent += fullText.charAt(i);
                        i++;
                        setTimeout(type, speed);
                    }
                };

                type();
                observer.unobserve(el); //Just once
            }
        });
    }, {threshold: 0.6}); //60% to 100%

    elements.forEach(el => observer.observe(el));
});

