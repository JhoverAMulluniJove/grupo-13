class Nodo{

    info=0;
    liga=null;
}
export class Lista{
  
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

       var P=this.INICIO;
       var Q=new Nodo();
       Q.info=DATO;
       Q.liga=P;
       P=Q;

       this.INICIO=P;
   }///////////////////////////////////////////
   inserta_final(DATO){
        var P=this.INICIO;
        
        var T=P;
        while(T.liga!=null){
            T=T.liga; 
        }
        var Q=new Nodo();
        Q.info=DATO;
        Q.liga=null;
        T.liga=Q;
        
        this.INICIO=P;
    }/////////////////////////////////////////////
    inserta_antes_X (DATO,X){
        var P=this.INICIO;
        var Q=P;
        var BAND=1;
        var T;
        while ( Q.info!=X && BAND==1 ){
            if(Q.liga!=null){
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
                X1.liga=P;
                P=X1;
            }
            else{
                T.liga=X1;
                X1.liga=Q;
            }
        }
        else{
            throw new Error("")
        }
        this.INICIO=P;
    }/////////////////////////////////////////////
    inserta_despues_X (DATO,X){
        var P=this.INICIO;
        var Q=P;
        var BAND=1;
        while ( Q.info!=X && BAND==1 ){
            if(Q.liga!=null){
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
        var P = this.INICIO;
        var Q = P;
        if(P.liga==null){
            P=null;
        }
        else{
            P=Q.liga;
            Q=null;
        }
        this.INICIO=P;//En c++ "delete Q",como buena práctica(en esta caso no es necesario) revisar https://es.javascript.info/garbage-collection
    }///////////////////////////////////////////// 
    elimina_final(){
        var P=this.INICIO;
        var Q=P;
        var T=P;
        if(P.liga==null){
            P=null;
        }
        else{
            while(Q.liga!=null){
                T=Q;
                Q=Q.liga;            
            }
            T.liga=null;
            Q=null;
        }
        this.INICIO=P;
    }
    elimina_nodo_X(X){
        var P=this.INICIO;
        var Q=P;
        var T;
        var BAND=1;
        while((Q.info!=X)&&(BAND==1)){
            if(Q.liga!=null){
                T=Q;
                Q=Q.liga;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==1){
            if(P==Q){
                P=Q.liga;
            }
            else{
                T.liga=Q.liga;
            }
            Q=null;
        }
        this.INICIO=P;
    }
    elimina_antes_X(X){
        var P=this.INICIO;
        var Q;
        var T;
        var R;
        var BAND;
        if(P.info==X){
            throw new Error("NO EXISTE UN NODO ANTERIOR AL SELECCIONADO");
        }
        else{
            Q=P;
            T=P;
            BAND=1;
            while((Q.info!=X)&&(BAND==1)){
                if(Q.liga!=null){
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
                }
                else{
                    R.liga=Q;
                }
                T=null;
            }
        }
        this.INICIO=P;
    }
    elimina_despues_X(X){
        var P=this.INICIO;
        var Q=P;
        var T=P;
        if(P.info==X){
            if(P.liga==null){
                null;
            }
            else{
                Q=Q.liga;
                T.liga=Q.liga;
                Q=null;
                this.INICIO=P;
            }
        }
        else{
            while((Q.info!=X)&&(BAND==1)){
                if(Q.liga!=null){
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
                }
                Q=null;
            }
            this.INICIO=P;
        }
    }
    dibujarNodosLog(){

        var	tmp=this.INICIO;
        var cad="";
        while(tmp!=null){
            cad+=tmp.info+"::";
            tmp=tmp.liga;
        }
        console.log(cad);
    }/////////////////////////////////////////////
    dibujarNodos(valor){

        var canvas=this.canvas;
        var ctx = canvas.getContext('2d');
        var	tmp=this.INICIO;
        

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

        while(tmp!=null){
            
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
        }

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