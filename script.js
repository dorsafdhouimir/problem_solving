// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Get the search input and car cards
    const searchInput = document.querySelector('.search-bar input');
    const carCards = document.querySelectorAll('.car-card');

    // Add an event listener for input on the search bar
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase(); // Get the search term in lowercase

        // Loop through each car card
        carCards.forEach(card => {
            const carName = card.querySelector('h3').textContent.toLowerCase(); // Get the car name in lowercase

            // Check if the car name includes the search term
            if (carName.includes(searchTerm)) {
                card.style.display = 'block'; // Show the card if it matches
            } else {
                card.style.display = 'none'; // Hide the card if it doesn't match
            }
        });
    });
});
// Gestion du bouton "swap" dans la section pickup
// const swapButton = document.querySelector('.swap-btn');
// swapButton.addEventListener('click', () => {
//     const selects = document.querySelectorAll('.form-group select');
//     if (selects.length >= 2) {
//         const tempValue = selects[0].value;
//         selects[0].value = selects[1].value;
//         selects[1].value = tempValue;
//         console.log('Les lieux de départ et d’arrivée ont été échangés');
//     }
// });

// Gestion du bouton "rent now"
const rentButtons = document.querySelectorAll('.rent-now');
rentButtons.forEach(button => {
    button.addEventListener('click', () => {
        const carName = button.closest('.car-card').querySelector('.card-header h3').textContent;
        alert("Vous avez choisi de louer la voiture : ${carName}");
        
        // Redirection vers la page de paiement
        window.location.href = 'Paiement.html'; // Change this to your actual payment page URL
    });
});

// Gestion du menu "Voir tout"
const viewAllLinks = document.querySelectorAll('.view-all');
viewAllLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("Affichage de tous les éléments de la section : ${link.closest('.section-header').querySelector('h2').textContent}");
        // Logique pour charger plus d'éléments
    });
});