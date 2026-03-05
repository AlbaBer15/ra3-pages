const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

const particleCount = 80;
const particles = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// Crear partículas
function createParticles(){

    for(let i = 0; i < particleCount; i++){

        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2,
            speedX: Math.random() - 0.5,
            speedY: Math.random() - 0.5
        });

    }

}

function drawParticles(){

    ctx.fillStyle = "#7deffc";

    particles.forEach(particle => {

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

    });

}

function moveParticles(){

    particles.forEach(particle => {

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if(particle.x < 0 || particle.x > canvas.width){
            particle.speedX *= -1;
        }

        if(particle.y < 0 || particle.y > canvas.height){
            particle.speedY *= -1;
        }

    });

}

function animate(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawParticles();
    moveParticles();

    requestAnimationFrame(animate);

}

createParticles();
animate();