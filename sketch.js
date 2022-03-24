var gato, rato, planodefundo, gato2, rato2, gatoimg, ratoimg, ratoprovocando, gatoandando;
var gatoimgfinal, ratoimagemfinal;
function preload() {
    //carregue as imagens aqui
    gatoimg=loadImage("images/cat1.png");
   planodefundo=loadImage("images/garden.png");
   ratoimg=loadImage("images/mouse1.png");
   rato2=loadImage("images/mouse2.png");
   gato2=loadImage("images/cat2.png");
   ratoprovocando=loadAnimation("images/mouse2.png","images/mouse3.png");
   gatoandando=loadAnimation("images/cat2.png","images/cat3.png");
   gatoimgfinal=loadImage("images/cat4.png");
   ratoimagemfinal=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    gato=createSprite(870,600);
    gato.addImage("gatosentado",gatoimg);
    gato.scale=0.2;

    rato=createSprite(180,600);
    rato.addAnimation("rato",ratoimg);
    rato.scale=0.2;
}

function draw() {
    
    background(planodefundo);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem

    if(gato.x - rato.x<(rato.width - gato.width)/2){
    gato.velocityX=0;
    gato.addImage("gatofinal",gatoimgfinal);
    gato.changeAnimation("gatofinal");
    gato.x=300;
    gato.scale=0.2;

    rato.addImage("ratofinal",ratoimagemfinal);
    rato.changeAnimation("ratofinal");

    }

    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
  if(keyCode===LEFT_ARROW){
    rato.addAnimation("ratoProvocando",ratoprovocando);
    rato.changeAnimation("ratoProvocando");
    rato.frameDelay=25;

    gato.velocityX=-5;
    gato.addAnimation("gatoAndando",gatoandando);
    gato.changeAnimation("gatoAndando");
    gato.frameDelay=25;
  }

}
