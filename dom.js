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

var titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = "Hello";

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');


for(var i=0; i<odd.length; i++){

  odd[i].style.backgroundColor = 'green';
  even[0].style.color = 'green'; // font color to green for 2nd item
}


