document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch('./idata.json');
        const data = await response.json();
        renderHTML(data);
        // Add event listeners to elements with 'm7' and 'm8' IDs
        const m7Element = document.getElementById('m7');
        const m8Element = document.getElementById('m8');
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
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    function renderHTML(data) {
        // Filter "onts" items
        const ontsItems = data.section.ul.filter(item => item.li.a.type === "onts");

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
    }
});
