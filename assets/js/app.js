// var content = document.getElementById('content');

// function Tasks(title, description, status)
// {
//     this.title = title;
//     this.description = description;
//     this.status = status;

//     Tasks.prototype.checkDone = function(){
//         if(this.status === "done")
//         {
//             return "checked";
//         }
//     };
// }

// const tasks = [
//     new Tasks("Chart", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos saepe adipisci, id voluptatem perspiciatis dolorum repellat repellendus, aperiam incidunt excepturi asperiores ea! Repellendus adipisci voluptatum dolor libero iste, quasi ex.", ""),
//     new Tasks("Table", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatum odit veritatis illo dolores, facilis nulla animi quos quod iure mollitia? Sed vero ipsa corrupti adipisci debitis quia fuga animi!", "done"),
//     new Tasks("Shelf", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium suscipit praesentium autem nobis incidunt saepe veniam, odit doloribus consectetur eum dicta sed voluptas mollitia vel neque quod, quo deserunt sequi!", "done"),
//     new Tasks("Cereals", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque consequuntur eum possimus ea mollitia libero. Expedita, eligendi. Fugit nulla nesciunt, nobis ipsa at similique id error quia veniam recusandae ut.", "")
// ];

// tasks.forEach(function (task){
//     content.innerHTML += "<h2>" + task.title + "</h2><div class='task-item'><input type='checkbox'" + task.checkDone() + "><p>" + task.description + "</p></div>";
// });


// tạo nút close
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// ẩn item khi ấn close
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// thêm check khi ấn vào item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// tạo item mới khi ấn nút add
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}