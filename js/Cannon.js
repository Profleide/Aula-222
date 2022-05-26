class Cannon { // classe canhão
  constructor(x, y, width, height, angle) { // passo tds informações
    this.x = x; 
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle; // angulo
    // atividade do aluno criar o canhão e add imagens 
    this.cannon_image = loadImage("assets/canon.png"); 
    this.cannon_base = loadImage("assets/cannonBase.png"); 
  }
   
  display() { // função mostrar
    push(); // inicializa
    translate(this.x, this.y); // transição
    rotate(this.angle); // 
    imageMode(CENTER);
    image(this.cannon_image, 0, 0, this.width, this.height);
    pop(); //zera 
    image(this.cannon_base,70, 20, 200, 200); 
    noFill(); // acabbou
  }
}
