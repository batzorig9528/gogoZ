        document.addEventListener('DOMContentLoaded', async function () {
            const queryParams = new URLSearchParams(window.location.search);
            console.log(queryParams.get("article"))
            const par = JSON.parse(queryParams.get("article"))
            console.log(par)
            renderHTML(par)
            function renderHTML(data) {
                // Create header HTML
                const headerHTML = `
                    <header>
                        <a href="index.html">
                            <img src="gogo-logo.345096b3.png">
                        </a>
                        <ul>
                            <li>
                                <p>цагагаар</p>
                                <a href="medee.html">
                                    <img src="sun-icon.b61be7df.svg">
                                </a>
                            </li>
                            <li>
                                <p>зурхай</p>
                                <a>
                                    <img src="calendar-icon.ff84145b.svg">
                                </a>
                            </li>
                            <li>
                                <p>зурхай</p>
                                <a>
                                    <img src="calendar-icon.b616d7e0.png">
                                </a>
                            </li>
                            <a>
                                <img src="burger-menu.6c31a5c9.svg">
                            </a>
                        </ul>
                    </header>
                `;
                // Create article HTML
                const articleHTML = `
                    <article style="margin-left: 20px;">
                        <div class="pro">
                            <img src="${data.profile.image}">
                            <p style="padding-left: 5px; color: #ffffffb4;">${data.profile.author}</p>
                            <img src="time-gray.9098dcef.svg" style="padding-left: 10px; ">
                            <p style="padding-left: 5px; color: #ffffffb4; width: 100px;">${data.profile.timestamp}</p>
                            ${data.profile.socialMedia.facebook ? '<img src="facebook.483468e9.svg" style="padding-left: 750px;">' : ''}
                            ${data.profile.socialMedia.twitter ? '<img src="twitter.b8e7ff8d.svg">' : ''}
                        </div>
                        <header>
                            <h1>${data.header.title}</h1>
                        </header>
                        <img src="${data.image}" style="width: 800px;">
                        ${data.content.map(paragraph => `<p>${paragraph}</p>`).join('')}
                        <footer>
                            <ul>
                                ${Object.entries(data.footer.reactions).map(([key, value]) => `
                                    <li>
                                        <a>
                                            <img src="img-reaction-${key}.png">
                                        </a>
                                        <p>${value}</p>
                                    </li>
                                `).join('')}
                            </ul>
                        </footer>
                    </article>
                `;
                const secHTML = `<section> 
                <header>
                <h2>Бусад мэдээ</h2>
            </header>
            <ul>
                <li>
                    <a href="medee.html" id="m1">
                        <img src="md1.jpg">
                        <h3>мэдээ1</h3>
                    </a>
                </li>
                <li>
                    <a href="medee.html" id="m2">
                        <img src="md1.jpg">
                        <h3>мэдээ2</h3>
                    </a>
                </li>
                <li>
                    <a href="medee.html" id="m3">
                        <img src="md1.jpg">
                        <h3>мэдээ3</h3>
                    </a>
                </li>
                <li>
                    <a href="medee.html" id="m4">
                        <img src="md1.jpg">
                        <h3>мэдээ4</h3>
                    </a>
                </li>
            </ul>
        </section>`
        const footerhtml = `<footer>
        <a>
            <img src="gogo-logo.345096b3.png">
        </a>
        <ul>
            <li>
                <p>Бидний тухай</p>
                <a>
                    <img src="tech.a4b28dbb.png">
                </a>
            </li>
            <li>
                <p>репакцийн ёс зүй</p>
                <a>
                    <img src="redakts.41ba2bab.png">
                </a>
            </li>
            <li>
                <p>Холбоо өарих</p>
                <a>
                     <img src="holboo.99f66db8.png">
                </a>
            </li>
        </ul>
       <ul>
            <li>
                <a>
                    <img src="twitter.b8e7ff8d.svg">
                </a>
            </li>
            <li>
                <a>
                    <img src="youtube.5095f9af.svg">
                </a>
            </li>
       </ul>
 </footer>
        `       
                // Combine everything and append to the body
                const fullHTML = headerHTML + articleHTML +secHTML + footerhtml;
                document.body.innerHTML = fullHTML;
            }
        });

