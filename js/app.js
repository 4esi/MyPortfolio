
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

//Dom items

const DomItems = {
    menuBtn: document.querySelector('.menuBtn'),
    terminalBtn: document.querySelector('.terminalBtn'),
    terminalOpenBtn: document.querySelector('.terminalOpen'),
    minimizeBtn: document.querySelector('.minimizeBtn'),
    maximizeBtn: document.querySelector('.maximizeBtn'),
    closeBtn: document.querySelector('.closeBtn'),
    nav: document.querySelector('nav'),
    terminal: document.querySelector('.terminal'),
    letter: document.querySelector('#Letter'),
    aboutmeImage: document.querySelector('.aboutmeImage'),
    workBox: document.querySelectorAll('.workBox')
}

//Window resize monitoring

function checkScreenSize() {
    if(window.innerWidth <= 768) {
        DomItems.nav.classList.add('hidden');
        DomItems.menuBtn.classList.remove('hidden');
    } else {
        DomItems.nav.classList.remove('hidden');
        DomItems.menuBtn.classList.add('hidden');
    }
}

window.addEventListener("resize", checkScreenSize);
window.addEventListener("DOMContentLoaded", checkScreenSize);

//Button event listeners
if(DomItems.menuBtn) {
    DomItems.menuBtn.addEventListener('click', () => {
    DomItems.nav.classList.toggle('hidden');
    })
}

if(DomItems.terminalOpenBtn) {
    DomItems.terminalOpenBtn.addEventListener('click', () => {
    console.log('katt');
    DomItems.terminal.classList.remove('hidden');
    })
}

if(DomItems.closeBtn) {
    DomItems.closeBtn.addEventListener('click', () => {
    DomItems.terminal.classList.add('hidden');
    DomItems.terminalBtn.classList.add('hidden');
    DomItems.terminal.classList.remove('maximizeTerminal');
    })
}

if(DomItems.minimizeBtn) {
    DomItems.minimizeBtn.addEventListener('click', () => {
    DomItems.terminal.classList.add('hidden');
    DomItems.terminalBtn.classList.remove('hidden');
    DomItems.terminal.classList.remove('maximizeTerminal');
    })
}

if(DomItems.terminalBtn) {
    DomItems.terminalBtn.addEventListener('click', () => {
    DomItems.terminal.classList.remove('hidden');
    })
}

if(DomItems.maximizeBtn) {
    DomItems.maximizeBtn.addEventListener('click', () => {
    DomItems.terminal.classList.toggle('maximizeTerminal');
    })
}

//Resize letter textarea

if(DomItems.letter) {
    DomItems.letter.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
    })
}


//WhatsApp

const phoneNumber = "36701549214";
const whatsappHref = "https://wa.me/" + phoneNumber;
document.getElementById('whatsappLink').setAttribute('href', whatsappHref);
document.getElementById('whatsappLink').setAttribute('target', '_blank');

//Gmail

const user = "zsoltnegyesi4";
const domain = "gmail.com";
const gmailHref = "mailto:" + user + "@" + domain;
document.getElementById('gmailLink').setAttribute('href', gmailHref);

//Animation

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('cleared');
        } else {
            entry.target.classList.remove('cleared');
        }
    });
}, {
    threshold: 0.5
});

if(DomItems.aboutmeImage) {
    observer.observe(DomItems.aboutmeImage);
}

DomItems.workBox.forEach(box => observer.observe(box));

const contactItems = document.querySelectorAll('#Contact ul li');

const observerr = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
    } else {
      entry.target.classList.remove('animated');
    }
  });
}, {
  threshold: 0.4
});

contactItems.forEach(item => observerr.observe(item));