document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navbar a");
    const containers = document.querySelectorAll(".container");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(nav => nav.classList.remove("active"));
            link.classList.add("active");

            containers.forEach(container => {
                container.style.display = "none";
            });

            const targetId = link.getAttribute("href").substring(1);
            document.getElementById(targetId).style.display = "flex";
        });
    });
});
