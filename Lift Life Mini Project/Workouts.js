
const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        // Replace 'page.html' with the actual page you want to redirect to
        const nextPage = `page${index + 1}.html`;
        window.location.href = nextPage;
    });
});

