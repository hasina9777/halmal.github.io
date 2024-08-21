// Function to redirect to the travel tips page
function filterTravelTips() {
    window.location.href = "traveltips.html";
}

// Function to load travel data based on user preferences (Example)
function loadTravelData() {
    const travelContent = document.getElementById('travel-content');
    const travelInfo = {
        "Africa": "Explore helpful travel tips...",
       
    };

    // Example logic to determine the content to load (this can be customized based on actual preferences)
    const continent = "Africa"; // Example: This would come from user preferences in a real scenario
    travelContent.innerText = travelInfo[continent];
}

// Load travel data when the page is loaded
document.addEventListener('DOMContentLoaded', loadTravelData);
