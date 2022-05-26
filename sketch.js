const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

// atividade aluno declarar angle
var canvas, angle, tower, ground, cannon;
var score = 0;

function preload() { // função carregar
  backgroundImg = loadImage("./assets/background.gif"); // imagem de fundo add e
  towerImage = loadImage("./assets/tower.png"); // imagem da torre
}

function setup() {

  canvas = createCanvas(1200, 600); // limte da tela
  engine = Engine.create(); // necessario pra rodar jogo 2d
  world = engine.world; // incluir no mundo
  // chão precisa ser estatico 
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options); // criando o solo criando retangulos (posição 0 pra x, y- 1 altura da tela )
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);// declarar uma variavel de torre, na função setup, usando Bodies.rectangle(), criar um retangulo horizontal
  World.add(world, tower);

  cannon = new Cannon(180, 110, 130, 100, angle); // criando o objeto canhao e chamando a classe
}

function draw() {

  image(backgroundImg, 0, 0, width, height); // aqui desenha o fundo

  Engine.update(engine);
  rect(ground.position.x, ground.position.y, width * 2, 1); // visualizar "desenhar o solo" = a linha preta na parte inferior e o solo
  push();// captura a nova configução
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310); // add as imagens
  pop(); // reverte para configuração anterior  011 97471-6106

  cannon.display();
}
