const getbutton = document.querySelector("#getbutton");
const showfact = document.querySelector("#showfact");
const api = "https://catfact.ninja/fact";


getbutton.addEventListener("click", async function () {
    try {
        showfact.textContent = "Loading...";
        // Fetch the fact from the API
        const response = await fetch(api);
        
        // Check if the response status is OK (200-299)
        if (response.ok) {
            const data = await response.json();
            showfact.textContent = data.fact;
        } else {
            // Handle the case where the response is not successful (e.g., 404 or 500)
            showfact.textContent = "API error: " + response.status + " - Please try again later.";
        }
    } catch (error) {
        // Handle network errors or other issues like CORS
        showfact.textContent = "Network error: Unable to fetch data. Please check the URL or try again later.";
        console.error("Error fetching data:", error);
    }
});
