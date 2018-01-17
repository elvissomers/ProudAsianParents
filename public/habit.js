/**
 * This is what you would do if the <script></script> code was
 * placed in the head instead of the body.
 *
 * That is because .html files load from top to bottom
 */


//  window.onload = function(){
//      do stuff;
//  }

// document.getElementById('add').onclick;

// or

// User clicked on the add button
// If there is any text inside the item field, add that text to the todo list

// Remove and complete SVG codes

var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : { // Object
    todo: [],
    completed: [],
    nottodo: [],
    notdone: [],
}



var removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"> <rect class="noFill" width="22" height="22"/> <g> <g> <path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3 c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9 C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7 c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2 c0.6,0,1.1,0.5,1.1,1.1V7z"/> </g> <g> <g> <path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/> </g> <g> <path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/> </g> <g> <path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8 C14.6,17.7,14.3,18,14,18z"/> </g> </g> </g> </svg>';
var completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"> <rect y="0" class="noFill" width="22" height="22"/> <g> <path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8 c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/> </g> </svg>';
var editSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"> <g> <g> <path d="m119.2,114.3h-109.4c-2.3,0-4.1,1.9-4.1,4.1s1.9,4.1 4.1,4.1h109.5c2.3,0 4.1-1.9 4.1-4.1s-1.9-4.1-4.2-4.1z"/> <path d="m5.7,78l-.1,19.5c0,1.1 0.4,2.2 1.2,3 0.8,0.8 1.8,1.2 2.9,1.2l19.4-.1c1.1,0 2.1-0.4 2.9-1.2l67-67c1.6-1.6 1.6-4.2 0-5.9l-19.2-19.4c-1.6-1.6-4.2-1.6-5.9-1.77636e-15l-13.4,13.5-53.6,53.5c-0.7,0.8-1.2,1.8-1.2,2.9zm71.2-61.1l13.5,13.5-7.6,7.6-13.5-13.5 7.6-7.6zm-62.9,62.9l49.4-49.4 13.5,13.5-49.4,49.3-13.6,.1 .1-13.5z"/> </g> </g></svg>';

renderList();
console.log("1");

document.getElementById('add').addEventListener('click', function () {
    var value = document.getElementById('item').value;

    if (value) {
        addItem(value);
    }
});

document.getElementById('add2').addEventListener('click', function () {
    var value = document.getElementById('item2').value;

    if (value) {
        addItem2(value);
    }
});

document.getElementById('item').addEventListener('keydown', function (e) {
    var value = this.value
    if (e.code === 'Enter' && value) {
        addItem(value);
    }
});

document.getElementById('item2').addEventListener('keydown', function (e) {
    var value = this.value
    if (e.code === 'Enter' && value) {
        addItem2(value);
    }
});

function addItem(value) {
    addItemToDOM(value, 1, 1);
    document.getElementById('item').value = '';
    data.todo.push(value);
    dataObjectUpdate();
}

function addItem2(value) {
    addItemToDOM(value, 3,1);
    document.getElementById('item2').value = '';
    data.nottodo.push(value);
    dataObjectUpdate();
	$.ajax({type:'get',
        url:'/add-badhabit',
        data:'Good=true',
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
    });
}

/**
 * rederList render the lists of to-do's and not-to-do's
 * as it was safed in the data var from previous sessions.
 */
function renderList() {
    if (!data.todo.length && !data.completed.length && !data.nottodo.length && !data.notdone.length) {
        return;
    } else {

        for (var k = 0; k < data.nottodo.length; k++) {
            var value = data.nottodo[k];
            addItemToDOM(value, 3, 1);
        }

        for (var l = 0; l < data.notdone.length; l++) {
            var value = data.notdone[l];
            addItemToDOM(value, 4, 1);
        }

        for (var i = 0; i < data.todo.length; i++) {
            var value = data.todo[i];
            addItemToDOM(value, 1, 1);
        }

        for (var j = 0; j < data.completed.length; j++) {
            var value = data.completed[j];
            addItemToDOM(value, 2, 1);
        }
    }

}

/**
 * Adds a new item to the todo list,
 * which is immediately displayed to the screen
 * @param {*} text the "todo" text
 * @param {*} type 1 = to-do; 2 = done; 3 = not-to-do (bad habit);
 * 4 = not done (bad habit)
 */
function addItemToDOM(text, type, index) {
    var list = document.getElementById('todo');

    switch (type) {
        case 1:
            list = document.getElementById('todo');
            break;
        case 2:
            list = document.getElementById('completed');
            break;
        case 3:
            list = document.getElementById('nottodo');
            break;
        case 4:
            list = document.getElementById('notdone');
            break;
    }



    var item = document.createElement('li');
    item.innerText = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeSVG;

    // Add click event for removing the item
    remove.addEventListener('click', removeItem);

    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeSVG;

    // Add click event for completing the item
    complete.addEventListener('click', completeItem);

    var edit = document.createElement('button');
    edit.classList.add('edit');
    edit.innterHTML = editSVG;
    edit.addEventListener('click', editItem);
    edit.addEventListener('click', removeItem);


    buttons.appendChild(remove);
    buttons.appendChild(complete);
    buttons.appendChild(edit);
    item.appendChild(buttons);

    list.insertBefore(item, list.childNodes[index]);
}

function dataObjectUpdate() {
    localStorage.setItem('todoList', JSON.stringify(data));
}

/**
 * Remove function: runs when you click a bin icon.
 * This removes the clicked item from the list it is in.
 */
function removeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var parentID = parent.id;
    var value = item.innerText;

    if (parentID === 'todo') {
        data.todo.splice(data.todo.indexOf(value), 1);
    } else if (parentID === 'nottodo') {
        data.nottodo.splice(data.nottodo.indexOf(value), 1);
    } else if (parentID === 'notdone') {
        data.notdone.splice(data.notdone.indexOf(value), 1);
    } else {
        data.completed.splice(data.todo.indexOf(value), 1);
    }
    dataObjectUpdate();

    parent.removeChild(item);
}

/**
 * Complete function: runs when you click a check icon.
 * This removes the clicked item from the list it is in
 * and places it in the "opposite" list,
 * i.e. to-do <---> completed
 * and not-to-do <---> not done
 */
function completeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var parentID = parent.id;
    var value = item.innerText;

    if (parentID === 'todo') {
        data.todo.splice(data.todo.indexOf(value), 1);
        data.completed.push(value);
    } else if (parentID === 'nottodo') {
        data.nottodo.splice(data.nottodo.indexOf(value), 1);
        data.notdone.push(value);
    } else if (parentID === 'notdone') {
        data.notdone.splice(data.notdone.indexOf(value), 1);
        data.nottodo.push(value);
    } else {
        data.completed.splice(data.todo.indexOf(value), 1);
        data.todo.push(value);
    }

    var target;

    if (parentID === 'todo') {
        // Its a to do item to be completed
        target = document.getElementById('completed');
    } else if (parentID === 'nottodo') {
        ;
        target = document.getElementById('notdone');
    } else if (parentID === 'notdone') {
        target = document.getElementById('nottodo');
    } else {
        // Its a completed item to be redone
        target = document.getElementById('todo');
    }

    // Shortened code:
    // var target = (parentID === 'todo') ? document.getElementById('completed') : document.getElementById('todo');

    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
    dataObjectUpdate();
}

function editItem() {
    var item = this.parentNode.parentNode;
    // var text = item.innerText;

    var parent = item.parentNode;
    // console.log(parent.indexOf(item));
    var parentID = parent.id;
    var value;
    var oldvalue = item.innerText;
    var index;

    for (var i = 0; i < parent.childNodes.length; i++) {
        if (parent.childNodes[i] == item) {
            index = i;
        }
    }

    console.log(index);

    if (parentID === 'todo' || parentID === 'completed') {
        value = document.getElementById('item').value;
        document.getElementById('item').value = '';
    } else {
        value = document.getElementById('item2').value;
        document.getElementById('item2').value = '';
    }
    var target;

    if (value) {
        // item.innerText = value;
        if (parentID === 'todo') {
            target = 1;
            data.todo.splice((data.todo.length - index), 0, value);
        } else if (parentID === 'nottodo') {
            target = 3;
            data.nottodo.splice((data.nottodo.length - index), 0, value);
        } else if (parentID === 'notdone') {
            target = 4;
            data.notdone.splice((data.notdone.length - index), 0, value);
        } else {
            target = 2;
            data.completed.splice((data.completed.length - index), 0, value);
        }

        // item.removeItem();
        addItemToDOM(value, target, index);
        dataObjectUpdate();
    }

}
