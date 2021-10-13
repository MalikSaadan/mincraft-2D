var canvas=new fabric.Canvas("canva1");

var block_height=30;

var block_width=30;

var person_y=10;

var person_x=10;

var block_obj="";

var person_obj="";

function person_update(){
    fabric.Image.fromURL("player.png",function(Img){
        person_obj=Img;
        person_obj.scaleToWidth(150);
        person_obj.scaleToHeight(140);
        person_obj.set({top:person_y,left:person_x});
        canvas.add(person_obj);

    })
}
function block_update(get_img){
    fabric.Image.fromURL(get_img,function(Img){
        block_obj=Img;
        block_obj.scaleToWidth(block_width);
        block_obj.scaleToHeight(block_height);
        block_obj.set({top:person_y+95,left:person_x+65});
        canvas.add(block_obj);
        
    })
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
  
    var moving=e.keyCode;
    if(e.shiftKey== true && moving=='66'){
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("width").innerHTML=block_width;
        document.getElementById("height").innerHTML=block_height;
    }
    if(e.shiftKey== true && moving=='84'){
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("width").innerHTML=block_width;
        document.getElementById("height").innerHTML=block_height;
    }
    if (moving=='38'){
    up();
    
    }
    if (moving=='37'){
        left();
        
        }
        if (moving=='39'){
            right();
            
            }
            if (moving=='40'){
                down();
                
                }
                if (moving=='83'){
                    block_update('cloud.jpg');
                    
                    }
                    if (moving=='76'){
                        block_update('dark_green.png');
                        
                        }
                        if (moving=='71'){
                            block_update('ground.png');
                            
                            }
                            if (moving=='77'){
                                block_update('light_green.png');
                                
                                }
                                if (moving=='78'){
                                    block_update('roof.jpg');
                                    
                                    }
                                    if (moving=='84'){
                                        block_update('trunk.jpg');
                                        
                                        }
                                        if (moving=='76'){
                                            block_update('unique.png');
                                            
                                            }
                                            if (moving=='87'){
                                                block_update('wall.jpg');
                                                
                                                }
                                                if (moving=='89'){
                                                    block_update('yellow_wall.png');
                                                    
                                                    }
                                                    if (moving=='68'){
                                                        block_update('diamond.png');
                                                        
                                                        }
                                                        if (moving=='82'){
                                                            block_update('gold.png');
                                                            
                                                            }
}
function up(){
    if(person_y>=0){
        person_y=person_y-block_height;
        canvas.remove(person_obj);
        person_update();
        
    }
}
function down(){
    if(person_y<=500){
        person_y=person_y+block_height;
        canvas.remove(person_obj);
        person_update();
        
    }
}
function left(){
    if(person_x>=0){
        person_x=person_x-block_width;
        canvas.remove(person_obj);
        person_update();
        
    }
}
function right(){
    if(person_x<=900){
        person_x=person_x+block_width;
        canvas.remove(person_obj);
        person_update();
        
    }
}