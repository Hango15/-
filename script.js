/*alert("Hello Vat Koryun");
document.write("<h1>Davon lav txa chi</h1>");
var a=58;
var b=-58;
var c=48;
var sum=a+b;
var han=a-b;
var baz=a*b;
var baj=a/b;
var tok=a%c;
document.write(sum+" "+han+" "+baz+" "+baj+" "+tok);
document.write("<br>");
document.write(a+"-"+b+"="+han);
document.write("<br>");
document.write(a+"*"+b+"="+baz);
document.write("<br>");
document.write(a+"/"+b+"="+baj);
document.write("<br>");
document.write(a+"%"+c+"="+tok);
var ab=prompt("Type your name");
document.write("Hello"+" "+ab);
var age=prompt("Type your age");
age=parseInt(age)
if(age>=18)
{document.write("Դու չափահաս ես")};
if(age<18)
{document.write("Դու անչափահաս ես")};*/
var tari = prompt("Ներմուծեք տարին");
var x;
switch (parseInt(tari)) {
  case 1988:
    x = document.write("Արցախյան ազատամարտ և Սպիտակի երկրաշարժ");
    break;
  case 1991:
    x = document.write("ՀՀ Անկախություն");
    break;
  case 1992:
    x = document.write("Շուշիի ազատագրում");
    break;
  default:
    x = document.write("Ոչ մի նշանակալից բան");
}
