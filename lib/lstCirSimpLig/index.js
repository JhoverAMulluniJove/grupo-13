import {ListaCircularSimplementeLigada} from './lista.js';
import {ListCircularSimplementeLigadaCanvas} from './listaCanvas.js';
import {bootbox_prompt,bootbox_alert} from '../utils/dialog.js';

let lista=null;
let listaCanvas=null;

export async function insertar_al_inicio(){
    var canvas=document.getElementById('tutorial2'); 
    if(lista==null){
        listaCanvas=new ListCircularSimplementeLigadaCanvas(canvas);
        lista=new ListaCircularSimplementeLigada(listaCanvas);
    }
    
    var DATO = await bootbox_prompt("ingrese valor de nodo");
    if(DATO==null || DATO.trim()=="")
        return;

    try{
        
        DATO=DATO.trim();
        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");

        lista.inserta_inicio(DATO);
        
        lista.dibujarNodosLog();	
    
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////
export async function insertar_al_final(){
    var canvas=document.getElementById('tutorial2'); 
    if(lista==null){
        listaCanvas=new ListCircularSimplementeLigadaCanvas(canvas);
        lista=new ListaCircularSimplementeLigada(listaCanvas);	
    }

    try{   
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var DATO = await bootbox_prompt("Ingrese valor de nodo");
        if(DATO==null || DATO.trim()=="")
            return;   
        DATO=DATO.trim();
        if(lista.buscar(DATO)==true)
                throw new Error("EL NODO YA SE INGRESO");

        lista.inserta_final(DATO);	
        lista.dibujarNodosLog();
    
    }catch(e){
       console.log(e);
       await bootbox_alert(e.message);
    }

}//////////////////////////////////////////////////////////
export async function insertar_antes_x(){
    var canvas=document.getElementById('tutorial2'); 
    if(lista==null){
        listaCanvas=new ListCircularSimplementeLigadaCanvas(canvas);
        lista=new ListaCircularSimplementeLigada(listaCanvas);	
    }
    
    try{

        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        
        var DATO = await bootbox_prompt("Ingrese valor de DATO");
        if(DATO==null || DATO.trim()=="")
                return;

        DATO=DATO.trim();
        if(lista.buscar(DATO)==true)
                throw new Error("EL NODO YA SE INGRESO");

        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null || DATO.trim()=="")
                return;
        if(lista.buscar(X)==false)
                throw new Error("EL NODO X NO EXISTE");

        X=X.trim();
        lista.inserta_antes_X(DATO,X);
        lista.dibujarNodosLog();
        
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////
export async function insertar_despues_x(){
    var canvas=document.getElementById('tutorial2'); 
    if(lista==null){
        listaCanvas=new ListCircularSimplementeLigadaCanvas(canvas);
        lista=new ListaCircularSimplementeLigada(listaCanvas);	
    }
    
    try{

        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        
        var DATO = await bootbox_prompt("Ingrese valor de DATO");
        if(DATO==null || DATO.trim()=="")
                return;

        DATO=DATO.trim();
        if(lista.buscar(DATO)==true)
                throw new Error("EL NODO YA SE INGRESO");

        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null || DATO.trim()=="")
                return;
        if(lista.buscar(X)==false)
                throw new Error("EL NODO X NO EXISTE");
        
        X=X.trim();
        lista.inserta_despues_X(DATO,X);
        lista.dibujarNodosLog();	

    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////
export async function eliminar_inicio(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        listaCanvas=new ListCircularSimplementeLigadaCanvas(canvas);
        lista=new ListaCircularSimplementeLigada(listaCanvas);	
    }

    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        await lista.elimina_inicio();
        lista.dibujarNodosLog();	

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////
export async function eliminar_final(){
    var canvas=document.getElementById('tutorial2'); 
    if(lista==null){
        listaCanvas=new ListCircularSimplementeLigadaCanvas(canvas);
        lista=new ListaCircularSimplementeLigada(listaCanvas);	
    }

    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        await lista.elimina_final();
        lista.dibujarNodosLog();	

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////
export async function eliminar_nodo_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        listaCanvas=new ListCircularSimplementeLigadaCanvas(canvas);
        lista=new ListaCircularSimplementeLigada(listaCanvas);	
    }

    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var DATO = await bootbox_prompt("Ingrese valor del nodo X");
        if(DATO==null)
                return;

        if(lista.buscar(DATO)==false)
                throw new Error("EL NODO X NO EXISTE");

        await lista.elimina_nodo_X(DATO);
        lista.dibujarNodosLog();	

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////
export async function eliminar_antes_x(){
    var canvas=document.getElementById('tutorial2'); 
    if(lista==null){
        listaCanvas=new ListCircularSimplementeLigadaCanvas(canvas);
        lista=new ListaCircularSimplementeLigada(listaCanvas);	
    }

    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var DATO = await bootbox_prompt("Ingrese valor del nodo X");
        if(DATO==null)
                return;
        if(lista.buscar(DATO)==false)
                throw new Error("EL NODO X NO EXISTE");

        await lista.elimina_antes_X(DATO);
        lista.dibujarNodosLog();	

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////
export async function eliminar_despues_x(){
    var canvas=document.getElementById('tutorial2'); 
    if(lista==null){
        listaCanvas=new ListCircularSimplementeLigadaCanvas(canvas);
        lista=new ListaCircularSimplementeLigada(listaCanvas);	
    }

    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var DATO = await bootbox_prompt("Ingrese valor del nodo X");
        if(DATO==null)
                return;

        if(lista.buscar(DATO)==false)
                throw new Error("EL NODO X NO EXISTE");

        await lista.elimina_despues_X(DATO);
        lista.dibujarNodosLog();	

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////
