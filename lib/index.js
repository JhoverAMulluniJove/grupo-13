import {Lista} from './lista.js';
import {bootbox_prompt,bootbox_alert} from './dialog.js';
let lista=null;

export async function agregar(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);	 	
    }
    var DATO = await bootbox_prompt("Ingrese valor del nodo");
    if(DATO==null)
        return;
    try{
        if(lista.buscar1(DATO)==true)
            throw new Error("NODO YA EXISTENTE");

        lista.inserta_inicio(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    
    }catch(e){
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////// Add your code here
export async function insertar_al_final(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);	
    }
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var DATO = await bootbox_prompt("Ingrese valor del nodo");
        if(DATO==null)
            return;
        if(lista.buscar1(DATO)==true)
                throw new Error("NODO YA EXISTENTE");
        lista.inserta_final(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);

    }catch(e){
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////// Add your code here
export async function insertar_antes_de(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);	
    }
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var DATO = await bootbox_prompt("Ingrese valor de DATO");
        if(DATO==null)
                return;

        if(lista.buscar1(DATO)==true)
                throw new Error("NODO YA EXISTENTE");

        var x = await bootbox_prompt("Ingrese valor del nodo X");
        if(x==null)
                return;

        lista.inserta_antes_de_x(DATO,x);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);

    }catch(e){
        await bootbox_alert(e.message);
    }

}////////////////////////////////////////////////////////// Add your code here
export async function insertar_despues_de(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);	
    }
     try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var DATO = await bootbox_prompt("Ingrese valor de DATO");
        if(DATO==null)
                return;

        if(lista.buscar1(DATO)==true)
                throw new Error("NODO YA EXISTENTE");

        var x = await bootbox_prompt("Ingrese valor del nodo X");
        if(x==null)
                return;

        lista.inserta_despues_de_x(DATO,x);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();

    }catch(e){
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////// Add your code here

export async function eliminar_primero(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);	
    }
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        lista.eliminar_primer_nodo();
        lista.dibujarNodosLog();
        lista.dibujarNodos();

         await bootbox_alert("NODO ELIMINADO");
    }catch(e){
        await bootbox_alert(e.message);
    }
}
export async function eliminar_ultimo(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);	
    }
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        lista.eliminar_ultimo_nodo();
        lista.dibujarNodosLog();
        lista.dibujarNodos();

        await bootbox_alert("NODO ELIMINADO");
    }catch(e){
        await bootbox_alert(e.message);
    }
}
export async function eliminar_nodo_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);	
    }
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var DATO = await bootbox_prompt("Ingrese valor del nodo X");
        if(DATO==null)
                return;
        if(lista.buscar1(DATO)==false)
                throw new Error("EL NODO NO EXISTE");
        lista.eliminar_nodo_x(DATO);
        lista.dibujarNodosLog();
        lista.dibujarNodos();

        await bootbox_alert("NODO ELIMINADO");
    }catch(e){
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////// Add your code here
export async function eliminar_antes_de(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);	
    }
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var DATO = await bootbox_prompt("Ingrese valor del nodo X");
        if(DATO==null)
                return;
        if(lista.buscar1(DATO)==false)
                throw new Error("EL NODO NO EXISTE");
        lista.eliminar_nodo_antes_de_x(DATO);
        lista.dibujarNodosLog();
        lista.dibujarNodos();
        await bootbox_alert("NODO ELIMINADO");

    }catch(e){
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////// Add your code here
export async function eliminar_despues_de(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);	
    }
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var DATO = await bootbox_prompt("Ingrese valor del nodo X");
        if(DATO==null)
                return;
        if(lista.buscar1(DATO)==false)
                throw new Error("EL NODO NO EXISTE");
        lista.eliminar_nodo_despues_de_x(DATO);
        lista.dibujarNodosLog();
        lista.dibujarNodos();
        await bootbox_alert("NODO ELIMINADO");
    }catch(e){
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////// Add your code here