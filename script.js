const btn = document.getElementById('magic-btn');
const messageBox = document.getElementById('message-box');
const heartsContainer = document.getElementById('hearts-container');

btn.addEventListener('click', () => {
    // 1. Cambiamos el mensaje
    messageBox.innerHTML = `
        <h2 style="color: #ff4081; animation: fadeIn 2s;">
            ¡Eres la mejor mamá del mundo! ❤️
        </h2>
        <p>Gracias por ser Julieta Sanabria, la persona más especial.</p>
    `;

    // 2. Ocultamos el botón después de clicar
    btn.style.display = 'none';

    // 3. Lanzamos la lluvia de corazones
    setInterval(createHeart, 300);
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤️';
    
    // Posición aleatoria horizontal
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Tamaño y velocidad aleatoria
    const duration = Math.random() * 3 + 2 + 's';
    heart.style.animationDuration = duration;
    heart.style.opacity = Math.random();
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';

    heartsContainer.appendChild(heart);

    // Borrar el corazón después de que caiga para no saturar la PC
    setTimeout(() => {
        heart.remove();
    }, 5000);
}