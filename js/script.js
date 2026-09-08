/*
=========================================================
Thomas Thuan Le Nguyen - Academic Website
JavaScript
=========================================================
*/

/* =========================
   ACTIVE NAVIGATION
========================= */

document.addEventListener("DOMContentLoaded", () => {
	const currentPage =
		window.location.pathname.split("/").pop();
	const navLinks =
		document.querySelectorAll(".sidebar nav a");

	navLinks.forEach(link => {
		const linkPage =
			link.getAttribute("href");

		if (
			linkPage === currentPage ||
			(currentPage === "" && linkPage === "index.html")
		) {
			link.classList.add("active");
		} else {
			link.classList.remove("active");
		}
	});
});

/* =========================
   SMOOTH SCROLLING
========================= */

document.querySelectorAll(
		'a[href^="#"]'
	)
	.forEach(anchor => {
		anchor.addEventListener(
			"click",
			function(event) {
				const target =
					document.querySelector(
						this.getAttribute("href")
					);

				if (target) {
					event.preventDefault();
					target.scrollIntoView({
						behavior: "smooth"
					});
				}
			}
		);
	});

/* =========================
   FADE-IN ANIMATION
========================= */
 
const sections =
	document.querySelectorAll(
		"section"
	);

const observer =
	new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add(
						"visible"
					);
				}
			});
		},
		{	
            threshold: 0.15
		}
	);

sections.forEach(section => {
	section.classList.add(
		"fade-section"
	);

	observer.observe(section);
});

/* =========================
   DARK MODE SUPPORT
   (Prepared for future toggle)
========================= */

const savedTheme =
	localStorage.getItem(
		"theme"
	);

if (savedTheme === "dark") {
	document.body.classList.add(
		"dark"
	);
}

function toggleTheme() {
	document.body.classList.toggle(
		"dark"
	);

	const theme =
		document.body.classList.contains(
			"dark"
		) ?
		"dark" :
		"light";

	localStorage.setItem(
		"theme",
		theme
	);
}

/* =========================
   sidebar.html INJECTION
========================= */

document.addEventListener("DOMContentLoaded", () => {
    fetch("sidebar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("sidebar-container").innerHTML = data;

            const currentPage = window.location.pathname.split("/").pop();

            document.querySelectorAll(".sidebar nav a").forEach(link => {
                if (link.getAttribute("href") === currentPage) {
                    link.classList.add("active");
                }
            });
        });
});