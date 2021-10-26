const item = document.querySelectorAll('.item');
console.log(item);


item.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
})