document.addEventListener('DOMContentLoaded', async function () {
    const queryParams = new URLSearchParams(window.location.search);
    console.log(queryParams.get("article"))
    const par = JSON.parse(queryParams.get("article"))
    console.log(par)
    const fullHTML =  `${par.profile.author}`; // Corrected to use 'par' instead of 'data'
    console.log(fullHTML)
    renderHTML(fullHTML);
    
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

