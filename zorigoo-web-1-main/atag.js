document.addEventListener('DOMContentLoaded', function () {
            // Add a click event listener to the anchor tag
            document.getElementById('m1').addEventListener('click', async function (event) {
                // Prevent the default link behavior
                event.preventDefault();
        
                try {
                    // Fetch the data dynamically
                    const response = await fetch('./data.json');
                    const data = await response.json();
                    
                    // Construct the query parameter string
                    const queryParams = Object.entries(data).map(([key, value]) => `${key}=${encodeURIComponent(JSON.stringify(value))}`).join('&');
                    
                    // Construct the URL with query parameters
                    const newURL = `medee.html?${queryParams}`;
        
                    // Navigate to the new page
                    window.location.href = newURL;
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            });
        });

document.addEventListener('DOMContentLoaded', function () {
            // Add a click event listener to the anchor tag
            document.getElementById('m2').addEventListener('click', async function (event) {
                // Prevent the default link behavior
                event.preventDefault();
        
                try {
                    // Fetch the data dynamically
                    const response = await fetch('./data2.json');
                    const data = await response.json();
                    
                    // Construct the query parameter string
                    const queryParams = Object.entries(data).map(([key, value]) => `${key}=${encodeURIComponent(JSON.stringify(value))}`).join('&');
                    
                    // Construct the URL with query parameters
                    const newURL = `medee.html?${queryParams}`;
        
                    // Navigate to the new page
                    window.location.href = newURL;
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            });
        });
        document.addEventListener('DOMContentLoaded', function () {
            // Add a click event listener to the anchor tag
            document.getElementById('m3').addEventListener('click', async function (event) {
                // Prevent the default link behavior
                event.preventDefault();
        
                try {
                    // Fetch the data dynamically
                    const response = await fetch('./data3.json');
                    const data = await response.json();
                    
                    // Construct the query parameter string
                    const queryParams = Object.entries(data).map(([key, value]) => `${key}=${encodeURIComponent(JSON.stringify(value))}`).join('&');
                    
                    // Construct the URL with query parameters
                    const newURL = `medee.html?${queryParams}`;
        
                    // Navigate to the new page
                    window.location.href = newURL;
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            });
        });
document.addEventListener('DOMContentLoaded', function () {
            // Add a click event listener to the anchor tag
            document.getElementById('m4').addEventListener('click', async function (event) {
                // Prevent the default link behavior
                event.preventDefault();
        
                try {
                    // Fetch the data dynamically
                    const response = await fetch('./data4.json');
                    const data = await response.json();
                    
                    // Construct the query parameter string
                    const queryParams = Object.entries(data).map(([key, value]) => `${key}=${encodeURIComponent(JSON.stringify(value))}`).join('&');
                    
                    // Construct the URL with query parameters
                    const newURL = `medee.html?${queryParams}`;
        
                    // Navigate to the new page
                    window.location.href = newURL;
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            });
        });
        document.addEventListener('DOMContentLoaded', function () {
            // Add a click event listener to the anchor tag
            document.getElementById('m5').addEventListener('click', async function (event) {
                // Prevent the default link behavior
                event.preventDefault();
        
                try {
                    // Fetch the data dynamically
                    const response = await fetch('./data4.json');
                    const data = await response.json();
                    
                    // Construct the query parameter string
                    const queryParams = Object.entries(data).map(([key, value]) => `${key}=${encodeURIComponent(JSON.stringify(value))}`).join('&');
                    
                    // Construct the URL with query parameters
                    const newURL = `medee.html?${queryParams}`;
        
                    // Navigate to the new page
                    window.location.href = newURL;
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            });
        });
        document.addEventListener('DOMContentLoaded', function () {
            // Add a click event listener to the anchor tag
            document.getElementById('m6').addEventListener('click', async function (event) {
                // Prevent the default link behavior
                event.preventDefault();
        
                try {
                    // Fetch the data dynamically
                    const response = await fetch('./data4.json');
                    const data = await response.json();
                    
                    // Construct the query parameter string
                    const queryParams = Object.entries(data).map(([key, value]) => `${key}=${encodeURIComponent(JSON.stringify(value))}`).join('&');
                    
                    // Construct the URL with query parameters
                    const newURL = `medee.html?${queryParams}`;
        
                    // Navigate to the new page
                    window.location.href = newURL;
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            });
        });
        