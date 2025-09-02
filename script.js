// Smooth scroll for sidebar links

document.querySelectorAll('.sidebar a').forEach(link => {

  link.addEventListener('click', e => {

    e.preventDefault();

    document.querySelector(link.getAttribute('href'))

      .scrollIntoView({behavior: "smooth"});

  });

});

// Contact form alert

document.getElementById("contactForm").addEventListener("submit", e => {

  e.preventDefault();

  alert("Your message has been sent!");

});