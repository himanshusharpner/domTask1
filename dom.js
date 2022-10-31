// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
// var title = document.getElementsByClassName('title');
// var main = document.getElementById('main');

// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerHTML = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h1>Hello</h3>'
// headerTitle.style.borderBottom = 'soild 3px black';
// headerTitle.style.color = '#00FF00';
//   console.log(title);
//   console.log(main);
//   title[0].style.fontWeight = "bold";
//   title[0].style.color = "green";

//GetElementByClassName

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// //items[1].style.fontWeight = 'bold';
// //items[1].style.backgroundColor = 'yellow';
// // items[0].style.fontWeight = 'bold';
// // items[2].style.fontWeight = 'bold';
// // items[3].style.fontWeight = 'bold';
// for(var i=0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
//   items[2].style.backgroundColor = 'green';
//   items[i].style.fontWeight = 'bold';
// }


//GETELEMENTSBYTAGNAME //
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';


for(var i=0; i < li.length; i++){
  li[i].style.backgroundColor = '#f4f4f4';
}



