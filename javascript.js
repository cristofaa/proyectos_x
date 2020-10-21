input type =button value=$200 onclick=boton200()
input type =button value=$500 onclick=boton500()
input type =button value=verificar  onclick=verificar()
h4vender h4
input type =submit value=vender 
script  type= textjavascript
 function boton50(){
document.formulario.cantidad.value = 50;}
 function boton100(){
document.formulario.cantidad.value = 100;}
 function boton200(){
document.formulario.cantidad.value = 200;}
 function boton500(){
 document.formulario.cantidad.value = 500;}
var variable = 0;
var variable_comprovacion = ;
function verificar()  {
if (variable == 0) {
variable = 1;
variable_comprovacion = document.formulario.telefono.value;
document.formulario.telefono.value = ;

} 
else{ 
 if (variable == 1){
     variable = 0;

if (variable_comprovacion == document.formulario.telefono.value) {

alert(en horabuena su numero esta verificado);

}else{
alert(la verificacion fallo );
alert(variable_comprovacion);
}}}}

