const flowers = document.querySelectorAll('.flower');

function getRandomPosition() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    return { x, y };
}

function moveFlower(flower) {
    const { x, y } = getRandomPosition();
    flower.style.transform = `translate(${x}px, ${y}px)`;
}

flowers.forEach(flower => {
    setInterval(() => moveFlower(flower), 2000); // Move every 2 seconds
});
