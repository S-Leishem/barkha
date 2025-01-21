// Particles and balloons script
const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const balloons = [];
const colors = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFCA3A", "#9B5DE5"];
let particles = [];

// Resize canvas dynamically
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Balloon class
class Balloon {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = 20 + Math.random() * 15; // Smaller balloons
    this.speed = Math.random() * 2 + 1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.y -= this.speed;
    if (this.y + this.radius < 0) {
      this.y = canvas.height + this.radius;
      this.x = Math.random() * canvas.width;
    }
    this.draw();
  }
}

// Particle class
class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = Math.random() * 5 + 1;
    this.speed = Math.random() * 3 + 1;
    this.angle = Math.random() * Math.PI * 2;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    this.radius -= 0.02;
    if (this.radius < 0) {
      this.radius = Math.random() * 5 + 1;
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
    }
    this.draw();
  }
}

// Initialize balloons and particles
function init() {
  balloons.length = 0;
  for (let i = 0; i < 15; i++) { // Fewer balloons
    const x = Math.random() * canvas.width;
    const y = canvas.height + Math.random() * 100;
    const color = colors[Math.floor(Math.random() * colors.length)];
    balloons.push(new Balloon(x, y, color));
  }

  particles.length = 0;
  for (let i = 0; i < 80; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const color = colors[Math.floor(Math.random() * colors.length)];
    particles.push(new Particle(x, y, color));
  }
}

// Animate balloons and particles
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  balloons.forEach(balloon => balloon.update());
  particles.forEach(particle => particle.update());
  requestAnimationFrame(animate);
}

// Start the animation
init();
animate();
