const red=document.querySelector(".red");
const cyan=document.querySelector(".cyan");
const violet=document.querySelector(".violet");
const orange=document.querySelector(".orange");
const pink=document.querySelector(".pink");

const center=document.querySelector(".center");


//global object(window) has lot of properties 

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement)=>{
  return window.getComputedStyle(selectedElement).backgroundColor;
};
// var orangeElementColor=getBGColor(orange);
// orange.addEventListener('mouseenter',()=>{
//   center.style.background=orangeElementColor;
// // } );

//wrap in one mentod for all coloe change

const magicColorChanger = (element, color)=>{
 return element.addEventListener("mouseenter",() => {
  center.style.background= color;

 });

};

magicColorChanger(red,getBGColor(red));
magicColorChanger(cyan,getBGColor(cyan));
magicColorChanger(violet,getBGColor(violet));
magicColorChanger(orange,getBGColor(orange));
magicColorChanger(pink,getBGColor(pink));













