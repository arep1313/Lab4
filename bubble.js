class Bubble {
    constructor(y,x,r,result) {
        
        var result;
        this.x = x;
        this.y = y;
        this.r = r;
        this.texto = 'hola';
        this.speed = 5;
        this.acc = 0.1;
        this.col = color(random(0,255),random(0,255),random(0,255));
        this.agrandando=false;
        this.mediumx = false;
        this.mediumy= false;
        this.stationary = false;
        this.reduciendo = false;
    }
    move (){
        if(this.agrandando){
            if(this.r<700)
            {
                this.r+=4;
            }
            if(this.x<(windowWidth/2))
            {
                this.x+=1
            }
            else if(this.x>(windowWidth/2)){
                this.x-=1;
            }
            else if(this.x<(windowWidth/2)+1 || this.x>(windowWidth/2)-1)
            {
                this.mediumx=true;
            }
            if(this.y<(windowHeight/2))
            {
                this.y+=1
            }
            else if(this.y<(windowHeight/2))
            {
                this.y-=1
            }
            else if(this.y<(windowHeight/2)+1 || this.y>(windowHeight/2)-1)
            {
                this.mediumy=true;
            }
            if(this.mediumx && this.mediumy)
            {
                this.agrandando = false;
                this.stationary = true;
            }
        }
        else if(this.stationary)
        {
           
        }
        else if(this.reduciendo)
        {
            
            if(this.r>100)
            {
                this.r-=4;
            }
            else{
                this.reduciendo=false;
            }
        }
        else{
            this.y = this.y+this.speed;
            this.speed+=this.acc;
            if(this.y > height){
                this.speed = -this.speed*(0.90);
                
            }
        }
    }
    clicked()
    {
        if(this.stationary)
        {
            this.reduciendo = true;
        }
        else
        {

        }
        var d = dist(this.x,this.y, mouseX,mouseY);
        if(d < (this.r/2))
        {
            
            if(this.stationary)
            {
                this.stationary=false;
                this.reduciendo = true;
                this.mediumx = false;
                this.mediumy = false;
            } 
            else{
                this.agrandando = !this.agrandando;
            }
        }
    }
    show(){
        fill(this.col);
        ellipse(this.x,this.y,this.r,this.r);
        fill(255);
        strokeWeight(0);
        textSize(16);
        textFont('Georgia');
        text(this.texto,this.x-20,this.y);
        text('X:'+windowWidth,200,200);
        text('Y:'+windowHeight,200    ,300);
        text(this.stationary,300,400);
        text(this.mediumy,300,500);
        text('y:' + this.y,300,600);
        text('x:' + this.x,300,700);
        text('result: '+ this.result,300,100);
    }

}