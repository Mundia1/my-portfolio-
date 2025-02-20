document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetID = this.getAttribute('href');

        // Only apply smooth scroll if the target is on the same page
        if (targetID.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(targetID);

            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
