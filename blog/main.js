const palettes = [
    ['#FF5733', '#FFBD33', '#33FF57', '#FF33A8'],
    ['#FF33A8', '#33FFBD', '#FF5733', '#33FF57', '#F0E68C'],
    ['#3357FF', '#F0E68C', '#FFBD33', '#FF5733', '#33FF57'],
    ['#FFB3BA', '#FFDFBA', '#FFFABA', '#BAFFC9', '#BAE1FF'],
    ['#FFABAB', '#FFC3A0', '#FF677D', '#D4A5A5', '#392F5A'],
    ['#FFE156', '#6BCB77', '#3F8CFF', '#FF6B6B', '#FFD166'],
    ['#FF9B85', '#FF6F61', '#D4B5FF', '#A2D2FF', '#FFC3A0'],
    ['#B9FBC0', '#A0E7E5', '#E8E7FF', '#FF9AB6', '#FF677D']
];

// Función para cambiar el color de cada letra en <p>
function animateText(element) {
    const text = element.textContent;
    element.textContent = '';

    text.split('').forEach((letter) => {
        const span = document.createElement('span');
        span.textContent = letter;
        element.appendChild(span);

        const colors = palettes[Math.floor(Math.random() * palettes.length)];
        const intervalTime = Math.random() * 2000 + 100;

        setInterval(() => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            span.style.color = randomColor;
        }, intervalTime);
    });
}

// Selecciona todas las secciones de párrafos y aplica el efecto de color
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph => {
    animateText(paragraph);
});

// Función para aplicar el efecto bounce a cada letra en h3
function animateBounce(element) {
    const text = element.textContent;
    element.textContent = '';

    text.split('').forEach((letter) => {
        const span = document.createElement('span');
        span.textContent = letter;
        element.appendChild(span);
        
        // Aplicar el efecto bounce
        span.style.display = 'inline-block'; // Permitir animación en bloque
        span.style.animation = 'bounce 1s ease infinite'; // Aplica la animación
        span.style.animationDelay = Math.random() * 0.3 + 's'; // Retardo aleatorio
    });
}

// Selecciona todos los <h3> y aplica el efecto bounce
const headers = document.querySelectorAll('h3');
headers.forEach(header => {
    animateBounce(header);
});
