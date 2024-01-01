document.addEventListener('DOMContentLoaded', async function () {
    await fetch('./idata.json')

    .then(response => response.json())
        .then(data => renderHTML(data))
        .catch(error => console.error('Error fetching data:', error));
    function renderHTML(data) {
       
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
        const element = document.getElementById('onts');
        element.innerHTML = `${ontsHTML}`;
    }

});