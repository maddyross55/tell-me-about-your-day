function setup() {
  createCanvas(windowWidth, windowHeight);
  d=select('.div-block');
  d.position(0,0);
  let gui_setup = new dat.GUI();
  gui = new Gui();
  gui_setup.add(gui,'type');
  gui_setup.addColor(gui,'tile');
  gui_setup.addColor(gui,'background')
  gui_setup.addColor(gui,'text')
}

function draw() {
  background(gui.background);
 
  let space = 30;
  for(x = 0; x < 400; x++){
    for(y=0;y<400;y++){
      fill(gui.tile)
      noStroke();
      square(x*space+3,y*space+3,27);
      
    }
  }
  textSize(40);
  textStyle(BOLD);
  textFont('times new roman');
  fill(gui.text);
  text(gui.type,windowWidth/25,windowHeight/1.6,900,900);
  textSize(60);
  text('tell me a little about your day!',windowWidth/25,windowHeight/1.8)
}


function Gui(){
  this.tile='#ffffff'
  this.type='type here.'
  this.background='#ded289'
  this.text='#000000'
}

