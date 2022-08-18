import {Spin} from '../utils/load.js'
export class ListaDoblementeLigadaCanvas{

    CANVAS=null;
    CTX=null;

    constructor(canvas) {
        this.CANVAS = this.responsive(canvas);
        this.CTX=canvas.getContext('2d');
    }///////////////////////////////////////////
    async elimina_inicio_pre(inicio){

        this.clearCanvas();

        var nodo=inicio;
        var xList=25;
        var yList=0;
        this.dibujarNodo(xList,yList,nodo.info,"rgb(51,51,0)","white");//COLOR GRAY
        this.dibujarEnlaceDer(xList,yList);
        this.dibujarEnlaceIzq(xList,yList); 
        
        var ctd=1;

        while(nodo.ligaDer!=null){
            
            nodo=nodo.ligaDer;
            let x=xList;
            let y=yList;
            x=x+80*ctd;
                
            this.dibujarNodo(x,y,nodo.info,"rgb(200,0,0)","white");
            this.dibujarEnlaceDer(x,y);
            this.dibujarEnlaceIzq(x,y);
    
            ctd++;        
        } 

        Spin.load();
        await new Promise(r => setTimeout(r, 2000));//sleep
        Spin.unload();

    }///////////////////////////////////////////
    async elimina_final_pre(fin,inicio){
        this.clearCanvas();

        var nodo=inicio;
        var xList=25;
        var yList=0;
        if(nodo==fin){
            this.dibujarNodo(xList,yList,nodo.info,"rgb(51,51,0)","white");
            this.dibujarEnlaceDer(xList,yList);
            this.dibujarEnlaceIzq(xList,yList);
        }
        else{
            this.dibujarNodo(xList,yList,nodo.info,"rgb(200,0,0)","white");
            this.dibujarEnlaceDer(xList,yList);
            this.dibujarEnlaceIzq(xList,yList);
        }
         
        
        var ctd=1;

        while(nodo.ligaDer!=null){
            
            nodo=nodo.ligaDer;
            let x=xList;
            let y=yList;
            x=x+80*ctd;
            if(nodo==fin){
                this.dibujarNodo(x,y,nodo.info,"rgb(51,51,0)","white");//COLOR GRAY
                this.dibujarEnlaceDer(x,y);
                this.dibujarEnlaceIzq(x,y); 
            }
            else{
                this.dibujarNodo(x,y,nodo.info,"rgb(200,0,0)","white");
                this.dibujarEnlaceDer(x,y);
                this.dibujarEnlaceIzq(x,y);
            }
            ctd++;        
        } 

        Spin.load();
        await new Promise(r => setTimeout(r, 2000));//sleep
        Spin.unload();
    }
    async elimina_nodo_X_pre(inicio,fin,nodo_dato){
        this.clearCanvas();

        var nodo=inicio;
        var xList=25;
        var yList=0;
        if(nodo.info!=nodo_dato){//PRIMER NODO
            this.dibujarNodo(xList,yList,nodo.info,"rgb(200,0,0)","white");
            this.dibujarEnlaceDer(xList,yList);
            this.dibujarEnlaceIzq(xList,yList);
        }
        else{
            this.dibujarNodo(xList,yList,nodo.info,"rgb(51,51,0)","white");//COLOR GRAY
            this.dibujarEnlaceDer(xList,yList);
            this.dibujarEnlaceIzq(xList,yList);
        }
        var ctd=1;
        while(nodo.ligaDer!=null){
            
            nodo=nodo.ligaDer;
            let x=xList;
            let y=yList;
            x=x+80*ctd;
                
            if(nodo.info==nodo_dato){
                this.dibujarNodo(x,y,nodo.info,"rgb(51,51,0)","white");//COLOR GRAY
                this.dibujarEnlaceDer(x,y);
                this.dibujarEnlaceIzq(x,y);
            }
            else{
                
                this.dibujarNodo(x,y,nodo.info,"rgb(200,0,0)","white");
                this.dibujarEnlaceDer(x,y);
                this.dibujarEnlaceIzq(x,y);
            }
            ctd++;   
        }
        Spin.load();
        await new Promise(r => setTimeout(r, 2000));//sleep
        Spin.unload();
    }
    async elimina_antes_X_pre(inicio,nodo_dato){
        this.clearCanvas();

        var nodo=inicio;
        var xList=25;
        var yList=0;
        if(inicio!=nodo_dato){
            this.dibujarNodo(xList,yList,nodo.info,"rgb(200,0,0)","white");
            this.dibujarEnlaceDer(xList,yList);
            this.dibujarEnlaceIzq(xList,yList);
        }
        else{
            this.dibujarNodo(xList,yList,nodo.info,"rgb(51,51,0)","white");
            this.dibujarEnlaceDer(xList,yList);
            this.dibujarEnlaceIzq(xList,yList);
        }
        var ctd=1;

        while(nodo.ligaDer!=null){
            
            nodo=nodo.ligaDer;
            let x=xList;
            let y=yList;
            x=x+80*ctd;
                
            if(nodo==nodo_dato){
                this.dibujarNodo(x,y,nodo.info,"rgb(51,51,0)","white");//COLOR GRAY
                this.dibujarEnlaceDer(x,y);
                this.dibujarEnlaceIzq(x,y);
            }
            else{
                
                this.dibujarNodo(x,y,nodo.info,"rgb(200,0,0)","white");
                this.dibujarEnlaceDer(x,y);
                this.dibujarEnlaceIzq(x,y);
            }
            ctd++;
        }
        Spin.load();
        await new Promise(r => setTimeout(r, 2000));//sleep
        Spin.unload();
    }
    async elimina_despues_X_pre(inicio,fin,nodo_dato){
        this.clearCanvas();

        var nodo=inicio;
        var xList=25;
        var yList=0;
        
        this.dibujarNodo(xList,yList,nodo.info,"rgb(200,0,0)","white");  
        this.dibujarEnlaceDer(xList,yList);
        this.dibujarEnlaceIzq(xList,yList);
        var ctd=1;

        while(nodo.ligaDer!=null){
            
            nodo=nodo.ligaDer;
            let x=xList;
            let y=yList;
            x=x+80*ctd;
            
            if(nodo==nodo_dato){
                this.dibujarNodo(x,y,nodo.info,"rgb(51,51,0)","white");//COLOR GRAY
                this.dibujarEnlaceDer(x,y);
                this.dibujarEnlaceIzq(x,y);
            }
            else{
                
                this.dibujarNodo(x,y,nodo.info,"rgb(200,0,0)","white");
                this.dibujarEnlaceDer(x,y);
                this.dibujarEnlaceIzq(x,y);
            }
            ctd++;  
        }
        Spin.load();
        await new Promise(r => setTimeout(r, 2000));//sleep
        Spin.unload();
    }
    elimina_inicio_post(inicio){
        if(inicio==null){
            this.clearCanvas();
            return;
        }

        this.clearCanvas();
        var xList=25;
        var yList=0;
        var nodo=inicio;
        
        this.dibujarNodo(xList,yList,nodo.info,"rgb(200,0,0)","white"); 
        this.dibujarEnlaceDer(xList,yList);
        this.dibujarEnlaceIzq(xList,yList);
        
        var ctd=1;

        while(nodo.ligaDer!=null){
            
            nodo=nodo.ligaDer;
            let x=xList;
            let y=yList;
            x=x+80*ctd;
                
            this.dibujarNodo(x,y,nodo.info,"rgb(200,0,0)","white");
            this.dibujarEnlaceDer(x,y);
            this.dibujarEnlaceIzq(x,y);
    
            ctd++;        
        } 

    }///////////////////////////////////////////
    inserta_inicio(inicio){

        var xList=25;
        var yList=0;
        if(inicio.ligaDer==null){//PRIMER NODO

            this.dibujarNodoAnimado(xList,yList,inicio.info,"rgb(200,0,0)","white");
            this.dibujarEnlaceDer(xList,yList);
            this.dibujarEnlaceIzq(xList,yList);

        }
        else{   

            
            this.clearCanvas();

            var nodo=inicio;
            
            this.dibujarNodoAnimado(xList,yList,nodo.info,"rgb(200,0,0)","white");
            this.dibujarEnlaceDer(xList,yList);
            this.dibujarEnlaceIzq(xList,yList);

            var ctd=1;
            while(nodo.ligaDer!=null){
               
                nodo=nodo.ligaDer;
                let x=xList;
                let y=yList;
                x=x+80*ctd;
                this.dibujarNodo(x,y,nodo.info,"rgb(200,0,0)","white");
                this.dibujarEnlaceDer(x,y);
                this.dibujarEnlaceIzq(x,y);
                ctd++;
            } 
            
        }        

    }
    inserta_final(fin,inicio){
        this.clearCanvas();

        var nodo=inicio;
        var xList=25;
        var yList=0;

        this.dibujarNodo(xList,yList,nodo.info,"rgb(200,0,0)","white");
        this.dibujarEnlaceDer(xList,yList);
        this.dibujarEnlaceIzq(xList,yList);

        
            var ctd=1;
        
            while(nodo.ligaDer!=null){
                    
                nodo=nodo.ligaDer;
                let x=xList;
                let y=yList;
                x=x+80*ctd;

                if(nodo==fin){
                    this.dibujarNodoAnimado(x,y,nodo.info,"rgb(200,0,0)","white");
                    this.dibujarEnlaceDer(x,y);
                    this.dibujarEnlaceIzq(x,y);
                }
                else{
                    this.dibujarNodo(x,y,nodo.info,"rgb(200,0,0)","white");
                    this.dibujarEnlaceDer(x,y);
                    this.dibujarEnlaceIzq(x,y);
                }
                ctd++;
            }
        
    }
    inserta_antes_X(inicio,nodo_dato){

        this.clearCanvas();

        var nodo=inicio;
        var xList=25;
        var yList=0;
        if(inicio==nodo_dato){//PRIMER NODO
            this.dibujarNodoAnimado(xList,yList,nodo.info,"rgb(200,0,0)","white");  
            this.dibujarEnlaceDer(xList,yList);
            this.dibujarEnlaceIzq(xList,yList);
        }
        else{
            this.dibujarNodo(xList,yList,nodo.info,"rgb(200,0,0)","white");  
            this.dibujarEnlaceDer(xList,yList);
            this.dibujarEnlaceIzq(xList,yList);
        }
        var ctd=1;

        while(nodo.ligaDer!=null){
            
            nodo=nodo.ligaDer;
            let x=xList;
            let y=yList;
            x=x+80*ctd;
                
            if(nodo==nodo_dato){
                
                this.dibujarNodoAnimado(x,y,nodo.info,"rgb(200,0,0)","white");
                this.dibujarEnlaceDer(x,y);
                this.dibujarEnlaceIzq(x,y);
            }
            else{
                
                this.dibujarNodo(x,y,nodo.info,"rgb(200,0,0)","white");
                this.dibujarEnlaceDer(x,y);
                this.dibujarEnlaceIzq(x,y);
            }

            ctd++;
            
        } 
    }////////////////////////////////////////////////////////////////////////////////////////
    inserta_despues_X(inicio,fin,nodo_dato){

        this.clearCanvas();
        
        var nodo=inicio;

        var xList=25;
        var yList=0;
        
        this.dibujarNodo(xList,yList,nodo.info,"rgb(200,0,0)","white");  
        this.dibujarEnlaceDer(xList,yList);
        this.dibujarEnlaceIzq(xList,yList);
        var ctd=1;

        while(nodo.ligaDer!=null){
            
            nodo=nodo.ligaDer;
            let x=xList;
            let y=yList;
            x=x+80*ctd;
            
            if(nodo==nodo_dato){
                
                this.dibujarNodoAnimado(x,y,nodo.info,"rgb(200,0,0)","white");
                this.dibujarEnlaceDer(x,y);
                this.dibujarEnlaceIzq(x,y);
            }
            else{
                
                this.dibujarNodo(x,y,nodo.info,"rgb(200,0,0)","white");
                this.dibujarEnlaceDer(x,y);
                this.dibujarEnlaceIzq(x,y);
            }
            ctd++;
        } 
    }
    dibujarEnlaceDer(x,y){
        
        //Dibujar flecha
        //linea de la flecha
        this.CTX.beginPath();
        this.CTX.moveTo(x+55,y+10);
        this.CTX.lineTo(x+55+20,y+10);
        this.CTX.stroke();

        //cabeza de la flecha
        this.CTX.beginPath();
        this.CTX.fillStyle="black";
        this.CTX.moveTo(x+55+20,y+5);
        this.CTX.lineTo(x+55+20+5,y+10);
        this.CTX.lineTo(x+55+20,y+15);
        this.CTX.closePath();
        this.CTX.fill();
    }///////////////////////////////////////////////////////////////////////////////
    dibujarEnlaceIzq(x,y){
        
        //Dibujar flecha
        //linea de la flecha
        this.CTX.beginPath();
        this.CTX.moveTo(x,y+20);
        this.CTX.lineTo(x-20,y+20);
        this.CTX.stroke();

        //cabeza de la flecha
        this.CTX.beginPath();
        this.CTX.fillStyle="black";
        this.CTX.moveTo(x-20,y+15);
        this.CTX.lineTo(x-20-5,y+20);
        this.CTX.lineTo(x-20,y+25);
        this.CTX.closePath();
        this.CTX.fill();
    }///////////////////////////////////////////////////////////////////////////////
    async dibujarNodoAnimado(xFinal,yFinal,dato,colorFondo,colorTexto){

        let num=4;
        let yInicio=105;
        let xInicio=0;
        
        let yAltura=yInicio-yFinal;
        let xAltura=xFinal-xInicio;

        //let desplazmiento=Math.sqrt(yAltura*yAltura+xAltura*xAltura);
        
        let vary=yAltura/(num-1);
        let yTmp=yInicio;

        let varx=xAltura/(num-1);
        let xTmp=xInicio;


        for(let i=0;i<num;i++){//SOLO VERTICAL
            
            if(i==num-1)
                this.dibujarNodo(xTmp,yTmp,dato,colorFondo,colorTexto);
            else
                this.dibujarNodo(xTmp,yTmp,dato,"rgb(51,51,0)",colorTexto);

            let yy_anterior=yTmp;
            let xx_anterior=xTmp;

            yTmp-=vary;
            xTmp+=varx;

            await new Promise(r => setTimeout(r, 500));//sleep
            if(i!=num-1)
                this.dibujarNodoClear(xx_anterior,yy_anterior);
            
        }

    }/////////////////////////////////////////////////////////////////////////////
    dibujarNodoClear(x,y){

        this.CTX.beginPath();
        this.CTX.fillStyle = "white";
        //this.CTX.fillRect (x,y, 55,30); 
        this.CTX.fillRect (x-3,y-3, 55+5,30+5); 
        this.CTX.closePath();

    }///////////////////////////////////////////////////////////////
    clearCanvas(){

        this.CTX.clearRect(0, 0, this.CANVAS.width, this.CANVAS.height);//limpia el canva 
    }///////////////////////////////////////////////////////////////
    dibujarNodo(x,y,dato,colorFondo,colorTexto){
       
        this.CTX.beginPath();
        //this.CTX.fillStyle = "rgb(200,0,0)";  //ROJO
        this.CTX.fillStyle = colorFondo;  //ROJO
        this.CTX.fillRect (x,y, 55,30);
            
        this.CTX.fillStyle=colorTexto;
        this.CTX.font = '15px Arial';
        this.CTX.fillText(dato,x+20,y+20);
        this.CTX.closePath();

    }///////////////////////////////////////////////////////////////
    responsive(canvas){
        
        if(window.innerWidth>800){//escritorio
            canvas.width  = window.innerWidth*1;  // set the resolution to fill the page
            canvas.height = window.innerHeight*0.2; 
        }
        else{//mobiles
             canvas.width  = window.innerWidth*1;  // set the resolution to fill the page
             
             if(window.innerHeight<350){
                canvas.height = window.innerHeight*0.2; 
             }
             else{
                canvas.height = window.innerHeight*0.1; 
             }
        }
        
        return canvas;
    }///////////////////////////////////////////////////////////////
}