class Nodo{

    info=0;
    liga=null;
}
export class ListaCircularSimplementeLigada{

    INICIO=null;

    LISTA_CANVAS=null;

    constructor(listaCanvas) {
         this.LISTA_CANVAS = listaCanvas;
    }///////////////////////////////////////////
    isVacio(){
        if(this.INICIO==null)
           return true;
        else 
           return false;
    }
    inserta_inicio(DATO){
       
        if(this.INICIO==null){//vacio
            var P=this.INICIO;
            
            var Q=new Nodo();
            Q.info=DATO;
            Q.liga=Q;
            P=Q;
            
            this.INICIO=P;
      }
      else{//no vacio
        
          var P=this.INICIO;
      
          var Q=new Nodo();
          Q.info=DATO;
          
          var F=P;//buscar el ultimo
          while(F.liga!=P){
              F=F.liga;
          }
          F.liga=Q;
          Q.liga=P;
          P=Q;
          
          this.INICIO=P;
          
      }

      this.LISTA_CANVAS.inserta_inicio(this.INICIO);

    }///////////////////////////////////////////
    inserta_final(DATO){
        
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
        
        this.LISTA_CANVAS.inserta_final(this.INICIO);
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
        else{
            throw new Error("EL elemento no se encuentra en la lista");
        }
        this.INICIO=P;
        this.LISTA_CANVAS.inserta_antes_X(this.INICIO,X1);
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
        this.LISTA_CANVAS.inserta_despues_X(this.INICIO,T);
    }/////////////////////////////////////////////
    elimina_inicio(){
        var P=this.INICIO;
        var Q=P;
        var T=Q;
        if(this.INICIO.liga==P){
            this.INICIO=null;
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
        this.LISTA_CANVAS.eliminar(this.INICIO);
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
        this.LISTA_CANVAS.eliminar(this.INICIO);
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
        this.LISTA_CANVAS.eliminar(this.INICIO);
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
        this.LISTA_CANVAS.eliminar(this.INICIO);
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
        this.LISTA_CANVAS.eliminar(this.INICIO);
    }
    dibujarNodosLog(){

        var P=this.INICIO;
        if(P!=null){
            var F=P;
            
            var cad="";
            if(F.liga==P){//1
                
                cad+=P.info+"::";
                cad+=P.liga.info;
                
            }
            else{//2 o mas
                
                var cad="";
                while(F.liga!=P){
                    cad+=F.info+"::";
                    F=F.liga;
                }    
                cad+=F.info+"::";
                cad+=F.liga.info;
            }
                
            console.log(cad);
        }
       

    }/////////////////////////////////////////////
    buscar(DATO){
        if(this.INICIO==null)
                return false;
        
        var encontrado=false;
        var	tmp=this.INICIO;
        var P=this.INICIO;

        do{
            if(tmp.info==DATO){
                encontrado=true;
                break;
            }
            tmp=tmp.liga;

        }while(tmp!=P);
        
        return encontrado;
    }///////////////////////////////////////////
}