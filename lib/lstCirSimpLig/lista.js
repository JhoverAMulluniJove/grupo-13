class Nodo{

    info=0;
    liga=null;
}
export class ListaCircular{
  
   INICIO=null;
   canvas=null;

   constructor(canvas) {
    this.canvas = canvas;
   }///////////////////////////////////////////
   isVacio(){
     if(this.INICIO==null)
        return true;
     else 
        return false;
   }///////////////////////////////////////////
   buscar1(DATO){
    var encontrado=false;
    var	tmp=this.INICIO;
    var P=this.INICIO;
    while(tmp!=null){
        if(tmp.info==DATO){
            encontrado=true;
            break;
        }
        tmp=tmp.liga;
    }
    return encontrado;
   }///////////////////////////////////////////
   inserta_inicio(DATO){
        if(this.INICIO==null){
            var P=this.INICIO;
            var Q= new Nodo();
            Q.info=DATO;
            Q.liga=Q;
            P=Q;
            this.INICIO=P;
        }
        else{
            var P=this.INICIO;
            var Q=new Nodo();
            Q.info=DATO;
            var F=P;
            while(F.liga!=P){
                F=F.liga;
            }
            F.liga=Q;
            Q.liga=P;
            P=Q;
            this.INICIO=P;
        }
   }///////////////////////////////////////////
   inserta_final(DATO){
        if(this.INICIO==null){
            var P=this.INICIO;
            var Q=new Nodo();
            Q.info=DATO;
            Q.liga=Q;
            P=Q;
            this.INICIO=P;
        }
        else{
            var P=this.INICIO;
            var T=P;
            while(T.liga!=P){
                T=T.liga;
            }
            var Q=new Nodo();
            Q.info=DATO;
            Q.liga=null;
            T.liga=Q;
            Q.liga=P;
            this.INICIO=P;
        }
    }/////////////////////////////////////////////
    inserta_antes_X(DATO,X){
        var P=this.INICIO;
        var Q=P;
        var BAND=1;
        var T;
        while(Q.info!=X && BAND==1){
            if(Q.liga!=P){
                T=Q;
                Q=Q.liga;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==1){
            var X1=new Nodo();
            X1.info=DATO;
            if(P==Q){ 
                var U=P;
                while(U.liga!=P){
                    U=U.liga;
                }
                X1.liga=P;
                P=X1;
                U.liga=P;
            }
            else{	
                T.liga=X1;
                X1.liga=Q;
            }
        }
        this.INICIO=P;
    }/////////////////////////////////////////////
    inserta_despues_X (DATO,X){
        var P=this.INICIO;
        var Q=P;
        var BAND=1;
        while(Q.info!=X && BAND==1){
            if(Q.liga!=P){
                Q=Q.liga;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==1){
            var T=new Nodo();
            T.info=DATO;
            T.liga=Q.liga;
            Q.liga=T;
        }
        this.INICIO=P;
    }/////////////////////////////////////////////
    elimina_inicio(){
        var P=this.INICIO;
        var Q=P;
        var T=Q;
        if(P.liga==P){
            this.INICIO=null;
            P=null;
        }
        else{
            while(T.liga!=P){
                T=T.liga;
            }
            T.liga=Q.liga;
            P=Q.liga;
            Q=null;
            this.INICIO=P;
        }
    }///////////////////////////////////////////// 
    elimina_final(){
        var P=this.INICIO;
        var Q=P;
        var T=P;
        if(P.liga==P){
            this.INICIO=null;
            P=null;
        }
        else{
            while(Q.liga!=P){
                T=Q;
                Q=Q.liga;
            }
            T.liga=Q.liga;
            Q=null;
            this.INICIO=P;
        }
    }
    elimina_nodo_X(X){
        var P=this.INICIO;
        var Q=P;
        var T=P;
        var BAND=1;
        if(P.liga==P){
            this.INICIO=null;
            P=null;
        }
        else{
            while((Q.info!=X)&&(BAND==1)){
                if(Q.liga!=P){
                    T=Q;
                    Q=Q.liga;
                }
                else{
                    BAND=0;
                }
            }
            if(BAND==1){
                if(P==Q){
                    while(T.liga!=P){
                        T=T.liga;
                    }
                    P=P.liga;
                    T.liga=T.liga.liga;
                }
                else{
                    T.liga=Q.liga;
                }
                Q=null;
            }
            this.INICIO=P;
        }
    }
    elimina_antes_X(X){
        var P=this.INICIO;
        var Q=P;
        var T=P;
        var R=P;
        var BAND=1;
        if(P.info==X){
            if(P.liga==P){
                this.INICIO=null;
                P=null;
            }
            else{
                while(Q.liga!=P){
                    T=Q;
                    Q=Q.liga;
                }
                T.liga=Q.liga;
                Q=null;
                this.INICIO=P;
            }
        }
        else{
            while((Q.info!=X)&&(BAND==1)){
                if(Q.liga!=P){
                    R=T;
                    T=Q;
                    Q=Q.liga;
                }
                else{
                    BAND=0;
                }
            }
            if(BAND==1){
                if(P.liga==Q){
                    P=Q;
                    while(R.liga!=T){
                        R=R.liga;
                    }
                    R.liga=R.liga.liga;
                }
                else{
                    R.liga=Q;
                }
                T=null;
            }
            this.INICIO=P;
        }
    }
    elimina_despues_X(X){
        var P=this.INICIO;
        var Q=P;
        var T=P;
        var BAND=1;
        if(P.liga==P){
            this.INICIO=null;
            P=null;
        }
        else{
            while((Q.info!=X)&&(BAND==1)){
                if(Q.liga!=P){
                    T=Q;
                    Q=Q.liga;
                }
                else{
                    BAND=0;
                }
            }
            if(BAND==1){
                if(P==Q){
                    Q=Q.liga;
                    T.liga=Q.liga;
                }
                else{
                    Q=Q.liga;
                    T=T.liga;
                    T.liga=Q.liga;
                    if(P==Q){
                        P=P.liga;
                    }
                }
                Q=null;
            }
            this.INICIO=P;
        }
    }
    dibujarNodosLog(){
       /* var	tmp=this.INICIO;
        var cad="";
        while(tmp!=null){
            cad+=tmp.info+"::";
            tmp=tmp.liga;
        }
        console.log(cad);*/
        var	tmp=this.INICIO;
        var P=tmp;
        var cad="";
        do{
            cad+=tmp.info+"::";
            tmp=tmp.liga;
        }while(tmp!=P);
        console.log(cad);
    }/////////////////////////////////////////////
    dibujarNodos(valor){

        var canvas=this.canvas;
        var ctx = canvas.getContext('2d');
        var	tmp=this.INICIO;
        var P=tmp;
        

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

        var x=0;
        var y=0;
        var ctd=0;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);//limpia el canva 

        var nodo=null;

        do{
            
            if(valor != undefined && tmp.info==valor){
                //Dibujar rectangulo
                ctx.beginPath();
                ctx.fillStyle = "rgb(51,51,0)";//GRIS
                ctx.fillRect (x,y, 55,30);
                
                nodo={};
                nodo.x=x;
                nodo.y=y;
                nodo.width=55;
                nodo.height=30;
                nodo.info=tmp.info;

            }
            else{
             //Dibujar rectangulo
             ctx.beginPath();
             ctx.fillStyle = "rgb(200,0,0)";  //ROJO
             ctx.fillRect (x,y, 55,30);
            }    

            //texto
            ctx.fillStyle="white";
            ctx.font = '15px Arial';
            ctx.fillText(tmp.info,x+20,y+20);
            ctx.closePath();

            //Dibujar flecha
            //linea de la flecha
            ctx.beginPath();
            ctx.moveTo(x+55,y+15);
            ctx.lineTo(x+55+20,y+15);
            ctx.closePath();
            ctx.stroke();
            //cabeza de la flecha
            ctx.beginPath();
            ctx.fillStyle="black";
            ctx.moveTo(x+55+20,y+10);
            ctx.lineTo(x+55+20+5,y+15);
            ctx.lineTo(x+55+20,y+20);
            ctx.closePath();
            ctx.fill();

            x=80*++ctd;
            tmp=tmp.liga;
        }while(tmp=!P);

        if(nodo!=null){

            setTimeout(function(){

                ctx.beginPath();
                ctx.fillStyle = "rgb(200,0,0)";//ROJO
                ctx.fillRect (nodo.x,nodo.y,nodo.width,nodo.height);
    
                //texto
                ctx.fillStyle="white";
                ctx.font = '15px Arial';
                ctx.fillText(nodo.info,nodo.x+20,nodo.y+20);
                ctx.closePath();

            },2000);
           
        }
        
    }/////////////////////////////////////////////
}