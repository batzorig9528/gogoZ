document.addEventListener('DOMContentLoaded', async function () {
    const queryParams = new URLSearchParams(window.location.search);
    console.log(queryParams.get("article"))
    const par = JSON.parse(queryParams.get("article"))
    console.log(par)
    const fullHTML =  `${par.profile.author}`; // Corrected to use 'par' instead of 'data'
    console.log(fullHTML)
    renderHTML(fullHTML);
    const m7Element = document.getElementById('m7');
    const m8Element = document.getElementById('m8');
    const m9Element = document.getElementById('m9');
    const m10Element = document.getElementById('m10');
    if (m7Element) {
        m7Element.addEventListener('click', async function () {
            try {
                // Fetch the data dynamically
                const response1 = await fetch('./data2.json');
                const data1 = await response1.json();
                // Construct the query parameter string
                const queryParams = Object.entries(data1).map(([key, value]) => `${key}=${encodeURIComponent(JSON.stringify(value))}`).join('&');
                
                // Construct the URL with query parameters
                const newURL = `medee.html?${queryParams}`;
    
                // Navigate to the new page
                window.location.href = newURL;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        });
    }
    if (m8Element) {
        m8Element.addEventListener('click', async function () {
            try {
                // Fetch the data dynamically
                const response2 = await fetch('./data3.json');
                const data2 = await response2.json();
                // Construct the query parameter string
                const queryParams = Object.entries(data2).map(([key, value]) => `${key}=${encodeURIComponent(JSON.stringify(value))}`).join('&');
                
                // Construct the URL with query parameters
                const newURL = `medee.html?${queryParams}`;
    
                // Navigate to the new page
                window.location.href = newURL;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        });
    }
    if (m9Element) {
        m9Element.addEventListener('click', async function () {
            try {
                // Fetch the data dynamically
                const response1 = await fetch('./data4.json');
                const data1 = await response1.json();
                // Construct the query parameter string
                const queryParams = Object.entries(data1).map(([key, value]) => `${key}=${encodeURIComponent(JSON.stringify(value))}`).join('&');
                
                // Construct the URL with query parameters
                const newURL = `medee.html?${queryParams}`;
    
                // Navigate to the new page
                window.location.href = newURL;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        });
    }
    if (m10Element) {
        m10Element.addEventListener('click', async function () {
            try {
                // Fetch the data dynamically
                const response2 = await fetch('./data.json');
                const data2 = await response2.json();
                // Construct the query parameter string
                const queryParams = Object.entries(data2).map(([key, value]) => `${key}=${encodeURIComponent(JSON.stringify(value))}`).join('&');
                
                // Construct the URL with query parameters
                const newURL = `medee.html?${queryParams}`;
    
                // Navigate to the new page
                window.location.href = newURL;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        });
    }
    async function renderHTML(fullHTML) {
        try {
            console.log(fullHTML)
            const response = await fetch('./idata.json');
            const data = await response.json();

            // Check if 'section' and 'ul' properties exist
            if (data && data.section && data.section.ul) {
                // Filter "onts" items
                const ontsItems = data.section.ul.filter(item => item.li.a.author === fullHTML);

                // Generate HTML for "onts" items
                const ontsHTML = ontsItems.map(item => `
                    <li>
                        <a href="${item.li.a.href}" style="${item.li.a.style}" id="${item.li.a.id}">
                            <img src="${item.li.a.img.src}">
                            <div class="${item.li.a.div.class}">
                                <h2>${item.li.a.div.h2}</h2>
                                <p>${item.li.a.div.p}</p>
                                <div class="${item.li.a.div.div.class}">
                                    <img src="${item.li.a.div.div.img.src}">
                                    <p style="${item.li.a.div.div.p.style}">${item.li.a.div.div.p.content}</p>
                                    <img src="${item.li.a.div.div.img2.src}" style="${item.li.a.div.div.img2.style}">
                                </div>
                            </div>
                        </a>
                    </li>
                `).join('');

                // Update the content of the 'onts' element
                const element = document.getElementById('onts');
                element.innerHTML = ontsHTML;
            } else {
                console.error('Invalid JSON structure. Check if "section" and "ul" properties exist.');
            }
        } catch (error) {
            console.error('Error fetching or parsing JSON:', error);
        }
    }
});

