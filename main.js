// Toggle Icon Navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// scroll section active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active1');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active1');
            });
        };
    });

    // Sticky Navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //  Remove Toggle Icon and Navbar
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active1');
};

// Read More link in Home
document.getElementById('span1').addEventListener('click', function () {
    document.getElementById('description-box').classList.toggle('active')
});

//  Read more button in About Section

function changeReadMore1() {
    const mycontent =
        document.getElementById('mybox1id');
    const mybutton =
        document.getElementById('mybuttonid');

    if (mycontent.style.display === 'none'
        || mycontent.style.display === '') {
        mycontent.style.display = 'block';
        mybutton.textContent = 'Read Less';
    } else {
        mycontent.style.display = 'none';
        mybutton.textContent = 'Read More';
    }
};

//  Read more button in Academic Achievement Section
function changeReadMore2() {
    const mycontent =
        document.getElementById('mybox2id');
    const mybutton =
        document.getElementById('mybuttonid2');

    if (mycontent.style.display === 'none'
        || mycontent.style.display === '') {
        mycontent.style.display = 'block';
        mybutton.textContent = 'Read Less';
    } else {
        mycontent.style.display = 'none';
        mybutton.textContent = 'Read More';
    }
};

// Contact Us Submission

const form = document.querySelector("form");

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "amt85200@gmail.com",
        Password: "C3F15F0F7B613E42340E32901EEB1403FC93",
        To: 'vermasujal16@gmail.com',
        From: "amt85200@gmail.com",
        Subject: document.getElementById("subject").value,
        Body: "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone No: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("msg").value
    }).then(
        message => alert("Message Sent Succesfully!")
    );
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
    form.reset();
});

//  Scroll Reveal 
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img , .services-container, .portfolio-box , .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p , .about-content', { origin: 'right' });

// Typed JS

const typed = new Typed('.multiple-text', {
    strings: ["Frontend Developer", "Data Analyst"],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});