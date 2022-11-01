var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);
// Add item
function addItem(e){
  e.preventDefault();

  var newItem = document.getElementById('item').value;
  var desciption = document.getElementById('description').value;

  var li = document.createElement('li');

  li.className = 'list-group-item';
  
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(" " + desciption));

  var deleteBtn = document.createElement('button');
  var editBtn = document.createElement('button');

  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editBtn.className = 'btn btn-warning btn-sm float-right edit';

  deleteBtn.appendChild(document.createTextNode('X'));
  editBtn.appendChild(document.createTextNode('Edit'));

  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e){
    
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      var disItem = item.childNodes[1].textContent;
      if(itemName.toLowerCase().indexOf(text)!=-1 || disItem.toLowerCase().indexOf(text)!=-1){
          item.style.display = 'block';
      }else{
          item.style.display = 'none';    
      }
  })
  
}
