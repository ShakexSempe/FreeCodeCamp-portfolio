// projects array
const projects = [
    {
        id: 1,
        title: "tribute page",
        link: "https://shakexsempe.github.io/lewis-hamilton-tribute-page/",
        img: "img/hamilton.png",
        desc: "FreeCodeCamp Responsive Web Design Project #1",
        alt: 'lewis hamilton',
    },
    {
        id: 2,
        title: "survey form",
        link: "https://shakexsempe.github.io/Survey-Form/",
        img: "img/survey.png",
        desc: "FreeCodeCamp Responsive Web Design Project #2",
        alt: 'form',
    },
    {
        id: 3,
        title: "Product Landing Page",
        link: "https://shakexsempe.github.io/Product-Landing-Page/",
        img: "img/audi.png",
        desc: "FreeCodeCamp Responsive Web Design Project #3",
        alt: 'audi',
    },
    {
        id: 4,
        title: "Technical Documentation Page",
        link: "https://shakexsempe.github.io/Technical-Documentation-Page/",
        img: "img/fpl.png",
        desc: "FreeCodeCamp Responsive Web Design Project #4",
        alt: 'img',
    },
    {
        id: 5,
        title: "personal portfolio webpage",
        link: "https://shakexsempe.netlify.app/",
        img: "img/shakex.png",
        desc: "FreeCodeCamp Responsive Web Design Project #5",
        alt: 'img',
    },
];
// variables
const item = document.querySelectorAll('.item');
const grid = document.getElementById("item-grid");
console.log(item);
// events listeners



// 
item.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});
// function

// window event listener
// window.addEventListener("DOMContentLoaded", () => {
//     displayProjects(projects);
// });

// displayProjects = (projectsItems) => {
//     let displayProject = projectsItems.map(project => {
//         return `<div class="item">
//         <div class="title">
//             <h2 class="item-title">${project.title}</h2>
//             <p class="description">${project.desc}</p>
//         </div>
//         <div class="link">
//             <figure>
//                 <img src=${project.img} alt="${project.alt}">
//             </figure>
//             <a href=${project.link} target="_blank">view page</a>
//             </div>
//     </div>` 
//     });
//     displayProject = displayProject.join("");
//     grid.innerHTML = displayProject;

// }



