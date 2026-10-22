// ===== CONFIGURACIÓN: cambia estos datos para cada cliente =====
var TEL="18099734499"; // número del negocio (aquí está el tuyo para la demo)
var MIO="18099734499"; // tu número, para el botón "Quiero la mía"
var PRESETS={
 barberia:{cls:"",kick:"Barbería · Santo Domingo Oeste",name:"Mi Caquito",tag:"Cortes limpios, barba perfecta y buen ambiente. Reserva tu turno sin esperar.",
  srv:[["Corte clásico","Con máquina y tijera",350],["Corte + barba","Perfilado completo",600],["Barba","Perfilado y toalla caliente",300],["Corte de niño","Hasta 10 años",300],["Diseño o líneas","Líneas y detalles",150]],
  gal:["💈","✂️","🧔","💈","✂️","🧴"],adr:"Calle Principal #25, Los Alcarrizos, Santo Domingo Oeste",
  hrs:[["Lunes a viernes","9:00 a. m. – 7:00 p. m."],["Sábado","8:00 a. m. – 8:00 p. m."],["Domingo","Cerrado"]]},
 salon:{cls:"salon",kick:"Salón de belleza · Santo Domingo Oeste",name:"Salón Bella Estilo",tag:"Cabello, uñas y cuidado personal en un solo lugar. Separa tu cita por WhatsApp.",
  srv:[["Corte y secado","Corte y peinado",800],["Tinte completo","Según largo del cabello",2500],["Keratina","Tratamiento alisador",3500],["Manicure","Con esmalte regular",500],["Uñas acrílicas","Juego completo",1500],["Maquillaje","Para eventos y fiestas",1800]],
  gal:["💇‍♀️","💅","✨","💄","💇‍♀️","💅"],adr:"Av. Principal #112, Herrera, Santo Domingo Oeste",
  hrs:[["Lunes a viernes","9:00 a. m. – 6:00 p. m."],["Sábado","8:00 a. m. – 7:00 p. m."],["Domingo","Con cita previa"]]}
};
function $(i){return document.getElementById(i)}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function money(n){return "RD$ "+n.toLocaleString("en-US")}
function link(t,tel){return "https://wa.me/"+(tel||TEL)+"?text="+encodeURIComponent(t)}
var cur="barberia";
function show(k){cur=k;var p=PRESETS[k];document.body.className=p.cls;
 $("b1").className=k==="barberia"?"on":"";$("b2").className=k==="salon"?"on":"";
 $("kick").textContent=p.kick;$("name").textContent=p.name;$("tag").textContent=p.tag;$("adr").textContent=p.adr;
 document.title=p.name+" | Modelo de página";
 $("srv").innerHTML=p.srv.map(function(s){return'<div class="srv"><div><b>'+esc(s[0])+"</b><span>"+esc(s[1])+"</span></div><em>"+money(s[2])+"</em></div>"}).join("");
 $("gal").innerHTML=p.gal.map(function(g){return"<div>"+g+"</div>"}).join("");
 $("hrs").innerHTML=p.hrs.map(function(h){return'<div class="hr"><span>'+esc(h[0])+"</span><b>"+esc(h[1])+"</b></div>"}).join("");
 $("s").innerHTML=p.srv.map(function(s){return"<option>"+esc(s[0])+" ("+money(s[2])+")</option>"}).join("");
 $("map").href="https://www.google.com/maps/search/"+encodeURIComponent(p.adr);
 $("wa").href=link("Hola, quiero información de "+p.name+".")}
$("b1").onclick=function(){show("barberia")};$("b2").onclick=function(){show("salon")};
$("mine").href=link("Hola Miguel, vi el modelo de página para barberías y salones y quiero una para mi negocio.",MIO);
$("send").onclick=function(){var p=PRESETS[cur];
 var t="Hola, quiero reservar una cita en "+p.name+".\nNombre: "+$("n").value.trim()+"\nServicio: "+$("s").value+"\nDía: "+$("d").value+"\nHora: "+$("h").value;
 window.open(link(t),"_blank")};
show("barberia");
