document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        { title: 'Project 1', image: 'project1.jpg', description: 'Description of Project 1' },
        { title: 'Project 2', image: 'project2.jpg', description: 'Description of Project 2' },
        { title: 'Project 3', image: 'project3.jpg', description: 'Description of Project 3' },
        // Add more projects as needed
    ];

    const tileContainer = document.getElementById('tileContainer');

    projects.forEach(project => {
        const tile = document.createElement('div');
        tile.classList.add('tile');

        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.title;

        const info = document.createElement('div');
        info.classList.add('tile-info');
        info.innerHTML = `<h2>${project.title}</h2><p>${project.description}</p>`;

        tile.appendChild(img);
        tile.appendChild(info);
        tileContainer.appendChild(tile);
    });
});
