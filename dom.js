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
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';


// for(var i=0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }


//QuerySelectore

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'soild 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector
// ('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector
// ('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';
// secondItem.style.backgroundColor = "green";

// var thirdItem = document.querySelector
// ('.list-group-item:nth-child(3)');
// thirdItem.style.display = 'none';

//QUERYSELECTORALL//

// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = "Hello";

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');


// for(var i=0; i<odd.length; i++){

//   odd[i].style.backgroundColor = 'green';
//   even[0].style.color = 'green'; // font color to green for 2nd item
// }


//TRAVERSING THE DOM //
// var itemList = document.querySelector('#items');
// console.log(itemList);
//parentNode

// console.log(itemList);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// //parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

//FirstChild
// console.log(itemList.firstChild);
// //FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello1';

//lastChild
//console.log(itemList.lastChild);
//LastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling
// console.log(itemList.nextSibling);
// nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green";

//createElement

//create a div
// var newDiv = document.createElement('div');

// //add class
// newDiv.className = 'hello';

// //add id
// newDiv.id = 'hello1';

// //add attribute
// newDiv.setAttribute('title', 'Hello Div');

// //create text node

// var newDivText = document.createTextNode('Hello world');

// //Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv,h1);

//add HELLo word before item Lister

var newDiv1 = document.createElement('div');
newDiv1.className = 'hello';
newDiv1.id = "hello1";
newDiv1.setAttribute('title','hello div');
var newDivText = document.createTextNode('HELLo word');
newDiv1.appendChild(newDivText);
console.log(newDiv1);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
newDiv1.style.fontSize = '30px';
container.insertBefore(newDiv1, h1);

// add  HELLo word before Item 1

const newNode = document.createElement("div");
const textNode = document.createTextNode("HELLo word");
newNode.appendChild(textNode);
const list = document.getElementById("items");
list.insertBefore(newNode, list.children[0]);








