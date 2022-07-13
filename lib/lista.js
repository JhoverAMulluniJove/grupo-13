class Nodo{

    vari=0;
    vector=null;
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
        if(tmp.vari==DATO){
            encontrado=true;
            break;
        }
        tmp=tmp.vector;
    }
    
    return encontrado;
   }///////////////////////////////////////////
   inserta_inicio(DATO){

       var P=this.INICIO;
       var Q=new Nodo();
       Q.vari=DATO;
       Q.vector=P;
       P=Q; 

       this.INICIO=P;
   }
   inserta_final(DATO){
        var P=this.INICIO;

        var T=P;
        while(T.vector!=null){
            T=T.vector;
        }
        var Q=new Nodo();
        Q.vari=DATO;
        Q.vector=null;
        T.vector=Q;
        
        this.INICIO=P;
    }
    inserta_antes_de_x(dato, x){
        var P=this.INICIO;
        var Q=P;
        if(P.vari==x){
            this.inserta_inicio(dato);
        }
        else{
            Q=Buscar(Q,x);
            var newnodo=new Nodo();
            newnodo.vari=dato;
            newnodo.vector=Q.vector;
            Q.vector=newnodo;
            this.INICIO=P;
        }
    }
    inserta_despues_de_x(dato,x){
        var P=this.INICIO;
        var Q=P;
        Q=Buscar(Q,x);
        if(Q.vector.vector==null){
            this.inserta_final(dato);
        }
        else{
            var newnodo=new Nodo();
            newnodo.vari=dato;
            Q=Q.vector;
            newnodo.vector=Q.vector;
            Q.vector=newnodo;
            this.INICIO=P;
        }
    }
    eliminar_primer_nodo(){
        var P=this.INICIO;
        var Q=P;
        if(P.vector==null){
            P=null;
        }
        else{
            P=Q.vector;
            Q=null;
        }
        this.INICIO=P;
    }
    eliminar_ultimo_nodo(){
        var P=this.INICIO;
        var Q=P;
        var T;
        if(P.vector==null){
            P=null;
        }
        else{
            while(Q.vector!=null){
                T=Q;
                Q=Q.vector;
            }
            T.vector=null;
        }
        Q=null;
        this.INICIO=P;
    }
    eliminar_nodo_x(x){
        var P = this.INICIO;
        var Q = P;
        var T;
        var BAND = 1;
        while((Q.vari!=x)&&(BAND==1)){
            if(Q.vector!=null){
                T=Q;
                Q=Q.vector;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==0){
            throw new Error("EL elemento con informacion X no se encuentra en la lista");
        }
        else{
            if(P==Q){
                P=Q.vector;
            }
            else{
                T.vector=Q.vector;
            }
            Q=null;
        }
        this.INICIO=P;
        
    }
    eliminar_nodo_antes_de_x(x){
        var P = this.INICIO;
        var Q;
        var R;
        var T;
        var BAND;
        if(P.vari==x){
            throw new Error("No existe un nodo que preceda al que contiene a X");
        }
        else{
            Q=P;
            T=P;
            BAND=1;
            while((Q.vari!=x)&&(BAND==1)){
                if(Q.vector!=null){
                    R=T;
                    T=Q;
                    Q=Q.vector;
                }
                else{
                    BAND=0;
                }
            }
            if(BAND==0){
                throw new Error("No existe un nodo que preceda al que contiene a X");    
            }
            else{
                if(P.vector==Q){
                    P=Q;
                }
                else{
                    R.vector=Q;
                }
                T=null;
            }
        }
        this.INICIO=P;
    }
    eliminar_nodo_despues_de_x(x){
        var P=this.INICIO;
        var Q = P;
        var temp;
        if(P.vari==x){
            if(Q.vector==null){
                throw new Error("No existe un nodo que proceda al que contiene a X");  
            }
            else{
                temp=Q.vector;
                temp.vector=null;
                P.vector=Q.vector.vector;
                this.INICIO=P;
            }
        }
        else{
            Q=Buscar(Q,x);
            if(Q.vector.vector==null){
                null;
            }
            else{
                temp=Q.vector.vector;
                Q=Q.vector;
                Q.vector=Q.vector.vector;
                temp.vector=null;
                this.INICIO=P;
            }
        }
    }
    dibujarNodosLog(){

        var	tmp=this.INICIO;
        var cad="";
        while(tmp!=null){
            cad+=tmp.vari+"::";
            tmp=tmp.vector;
        }
        console.log(cad);
    }
    dibujarNodos(valor){

        var canvas=this.canvas;
        var ctx = canvas.getContext('2d');
        var	tmp=this.INICIO;
        
        var x=0;
        var y=0;
        var ctd=0;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);//limpia el canva
        var nodo=null;				
        while(tmp!=null){
            
            if(valor != undefined && tmp.vari==valor){
                //Dibujar rectangulo
                ctx.beginPath();
                ctx.fillStyle = "rgb(51,51,0)";//GRIS
                ctx.fillRect (x,y, 55,30);
                
                nodo={};
                nodo.x=x;
                nodo.y=y;
                nodo.width=55;
                nodo.height=30;
                nodo.vari=tmp.vari;

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
            ctx.fillText(tmp.vari,x+20,y+20);
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
            tmp=tmp.vector;
        }

        if(nodo!=null){

            setTimeout(function(){

                ctx.beginPath();
                ctx.fillStyle = "rgb(200,0,0)";//ROJO
                ctx.fillRect (nodo.x,nodo.y,nodo.width,nodo.height);
    
                //texto
                ctx.fillStyle="white";
                ctx.font = '15px Arial';
                ctx.fillText(nodo.vari,nodo.x+20,nodo.y+20);
                ctx.closePath();

            },1000);
           
        }
        
    }
}
function Buscar(P,x){
        var buscador = P;
        var BAND=1;
        
        while(buscador.vector.vari != x && BAND==1){
            if(buscador.vector.vector!=null){
                buscador=buscador.vector;
            }
            else{
                BAND=0;
            }
        }
        return buscador;
}