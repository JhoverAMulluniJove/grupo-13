class Nodo{

    info=0;
    ligaDer=null;
    ligaIzq=null;
}
export class ListaDoblementeLigada{

   INICIO=null;
   FIN=null;

   LISTA_CANVAS=null;

   constructor(listaCanvas) {
        this.LISTA_CANVAS = listaCanvas;
   }///////////////////////////////////////////
   isVacio(){
        if(this.INICIO==null)
            return true;
        else 
            return false;
   }///////////////////////////////////////////
   inserta_inicio(DATO){

        if(this.INICIO==null){
            
            var Q=new Nodo();
            Q.info=DATO;
            
            this.INICIO=Q;
            this.FIN=Q;
        }
        else{
            
            var P=this.INICIO;
                
            var Q=new Nodo();
            Q.info=DATO;
            Q.ligaDer=P;
            P.ligaIzq=Q;
            Q.ligaIzq=null;
            P=Q;
            
            this.INICIO=P;    
        }

        this.LISTA_CANVAS.inserta_inicio(this.INICIO);

    }///////////////////////////////////////////
    inserta_final(DATO){
        if(this.INICIO==null){
            throw new Error("NO IMPLEMENTADO");
        }
        var F = this.FIN;
        var Q = new Nodo();
        Q.info=DATO;
        F.ligaDer=Q;
        Q.ligaIzq=F;
        Q.ligaDer=null;
        F=Q;
        this.FIN=F;
        this.LISTA_CANVAS.inserta_final(this.FIN,this.INICIO);
    }
    inserta_antes_X(DATO,X){

        if(this.INICIO==null){
            throw new Error("NO IMPLEMENTADO");
        }
        
        var P = this.INICIO;
        var F = this.FIN;
        var Q=P;
        while(Q.ligaDer!=null && Q.info!=X){
            Q=Q.ligaDer;
        }
        if(Q.info==X){
            var T=new Nodo();
            T.info=DATO;
            T.ligaDer=Q;
            var R=Q.ligaIzq;
            Q.ligaIzq=T;
            
            if(P==Q){
                P=T;
                T.ligaIzq=null;
            }
            else{
                R.ligaDer=T;
                T.ligaIzq=R;
            }
        }
        else{

            throw new Error("EL elemento no se encuentra en la lista");
        }
        
        this.INICIO=P;

        this.LISTA_CANVAS.inserta_antes_X(this.INICIO,T);

    }///////////////////////////////////////////
    inserta_despues_X(DATO,X){
        if(this.INICIO==null){
            throw new Error("NO IMPLEMENTADO");
        }
        var P=this.INICIO;
        var F=this.FIN;
        var Q=P;
        while(Q.ligaDer!=null && Q.info!=X){
            Q=Q.ligaDer;
        }
        if(Q.info==X){
            var T=new Nodo();
            T.info=DATO;
            T.ligaDer=Q.ligaDer;
            Q.ligaDer=T;
    
            T.ligaIzq=Q;
            if(Q==F){//ULTIMO NODO
                F=T;
            }
            else{
                T.ligaDer.ligaIzq=T;    
            }
        }
        else{
            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
        
        this.INICIO=P;
        this.FIN=F;
        this.LISTA_CANVAS.inserta_despues_X(this.INICIO,this.FIN,T);
    }
    async elimina_inicio(){

        await this.LISTA_CANVAS.elimina_inicio_pre(this.INICIO);

        let Q = this.INICIO;
        this.INICIO = Q.ligaDer;
        
        if(this.INICIO!=null)
            this.INICIO.ligaIzq=null;
        
        Q=null;
        
        this.LISTA_CANVAS.elimina_inicio_post(this.INICIO);
        
    }/////////////////////////////////////////////
    async elimina_final(){
        
        if(this.INICIO==null){
            throw new Error("NO IMPLEMENTADO");
        }
        await this.LISTA_CANVAS.elimina_final_pre(this.FIN,this.INICIO);
        var F=this.FIN;
        var Q=F;
        var P=this.INICIO;
        if(Q.ligaIzq!=null){
            F=Q.ligaIzq;
            F.ligaDer=null;
        }
        else{
            F=null;
            P=null;
        }
        Q=null;
        this.FIN=F;
        this.INICIO=P;
        this.LISTA_CANVAS.elimina_inicio_post(this.INICIO);
    }
    async elimina_nodo_X(X){
        await this.LISTA_CANVAS.elimina_nodo_X_pre(this.INICIO,this.FIN,X);
        var P=this.INICIO;
        var F=this.FIN;
        var Q=P;
        var T;
        var R;
        
        while(Q.ligaDer!=null && Q.info!=X){
            Q=Q.ligaDer;
        }
        if(Q.info==X){
            if(Q==P && Q==F){
                P=null;
                F=null;
            }
            else{
                if(Q==P){
                    P=Q.ligaDer;
                    P.ligaIzq=null;
                }
                else{
                    if(Q==F){
                        F=Q.ligaIzq;
                        F.ligaDer=null;
                    }
                    else{
                        T=Q.ligaIzq;
                        R=Q.ligaDer;
                        T.ligaDer=R;
                        R.ligaIzq=T;
                    }
                }
            }
            Q=null;
        }
        else{
            throw new Error("El elemento con informacion X no se encuentra en la lista")
        }
        this.INICIO=P;
        this.FIN=F;
        this.LISTA_CANVAS.elimina_inicio_post(this.INICIO);
    }
    async elimina_antes_X(X){
        
        var P=this.INICIO;
        var Q=P;
        var T;
        var R;
        while(Q.ligaDer!=null && Q.info!=X){
            Q=Q.ligaDer;
        }
        if(Q.info==X){
            if(P==Q){
                throw new Error("NO existe nodo anterior al primero");
            }
            else{
                T=Q.ligaIzq;
                await this.LISTA_CANVAS.elimina_antes_X_pre(this.INICIO,T);
            }
            if(P==T){
                P=Q;
                P.ligaIzq=null;
            }
            else{
                R=T.ligaIzq;
                Q.ligaIzq=R;
                R.ligaDer=Q;
            }
            T=null;
        }
        else{
            throw new Error("El elemento con informacion X no se encuentra en la lista");
        }
        this.INICIO=P;
        this.LISTA_CANVAS.elimina_inicio_post(this.INICIO);
    }
    async elimina_despues_X(X){
        var P=this.INICIO;
        var F=this.FIN;
        var Q=P;
        var T;
        var R;
        while(Q.ligaDer!=null && Q.info!=X){
            Q=Q.ligaDer;
        }
        if(Q.info==X){
            if(F==Q){
                throw new Error("NO existe nodo despues del ultimo");
            }
            else{
                T=Q.ligaDer;
                await this.LISTA_CANVAS.elimina_despues_X_pre(this.INICIO,this.FIN,T);
            }
            if(F==T){
                F=Q;
                F.ligaDer=null;
            }
            else{
                R=T.ligaDer;
                Q.ligaDer=R;
                R.ligaIzq=Q;
            }
            T=null;
        }
        else{
            throw new Error("El elemento con informacion X no se encuentra en la lista");
        }
        this.INICIO=P;
        this.FIN=F;
        this.LISTA_CANVAS.elimina_inicio_post(this.INICIO);
    }
    dibujarNodosLogDer(){

        var P=this.INICIO;
        var cad="";
        while(P!=null){
            cad+=P.info+"::";
            P=P.ligaDer;
        }
        console.log(cad);

    }/////////////////////////////////////////////
    dibujarNodosLogIzq(){

        var P=this.FIN;
        var cad="";
        while(P!=null){
            cad+=P.info+"::";
            P=P.ligaIzq;
        }
        
        console.log(cad);
    }/////////////////////////////////////////////
    buscar(DATO){
        var encontrado=false;
        var	tmp=this.INICIO;
        while(tmp!=null){
            if(tmp.info==DATO){
                encontrado=true;
                break;
            }
            tmp=tmp.ligaDer;
        }
        
        return encontrado;
       }
}