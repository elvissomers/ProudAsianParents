var data = [];

function getIndex(title) {
    for(var i = 0; i < data.length; i++) {
        if(data[i].title === title) {
            return i;
        }
    }
}

function refresh() {
    $.get( "/get-habits", function( newData ) {
        data = newData.slice(0);
    });

   // renderList();
}

refresh();
//renderList();

function habit(title, id, good) {
    this.title = title;
    this.id = id;
    this.description = "empty";
    this.creationDate = null;
    this.good = good;
    this.completed = false;
}

var removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"> <rect class="noFill" width="22" height="22"/> <g> <g> <path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3 c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9 C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7 c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2 c0.6,0,1.1,0.5,1.1,1.1V7z"/> </g> <g> <g> <path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/> </g> <g> <path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/> </g> <g> <path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8 C14.6,17.7,14.3,18,14,18z"/> </g> </g> </g> </svg>';
var completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"> <rect y="0" class="noFill" width="22" height="22"/> <g> <path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8 c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/> </g> </svg>';
var editSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"> <g> <g> <path d="m119.2,114.3h-109.4c-2.3,0-4.1,1.9-4.1,4.1s1.9,4.1 4.1,4.1h109.5c2.3,0 4.1-1.9 4.1-4.1s-1.9-4.1-4.2-4.1z"/> <path d="m5.7,78l-.1,19.5c0,1.1 0.4,2.2 1.2,3 0.8,0.8 1.8,1.2 2.9,1.2l19.4-.1c1.1,0 2.1-0.4 2.9-1.2l67-67c1.6-1.6 1.6-4.2 0-5.9l-19.2-19.4c-1.6-1.6-4.2-1.6-5.9-1.77636e-15l-13.4,13.5-53.6,53.5c-0.7,0.8-1.2,1.8-1.2,2.9zm71.2-61.1l13.5,13.5-7.6,7.6-13.5-13.5 7.6-7.6zm-62.9,62.9l49.4-49.4 13.5,13.5-49.4,49.3-13.6,.1 .1-13.5z"/> </g> </g></svg>';

setInterval(function () {
    refresh();
   // renderList();
}, 1000);

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
    var index;
    if(!(value == null || value == false)){
        $.ajax({
            type: 'get',
            url: '/add-habit',
            data: "title=" + value + "&good=true",
            success: function (data) {
                index = data;
            }
        });
    }

    addItemToDOM(value, 1, 1);
    document.getElementById('item').value= '';
    var newHabit = new habit(value, index, true);
    data.push(newHabit);
}



function addItem2(value) {
    var index;
    $.ajax({type:'get',
        url:'/add-habit',
        data:"title=" + value + "&good=false",
        success: function(data){
            index = data;
        }
    });

    addItemToDOM(value, 3,1);
    document.getElementById('item2').value = '';
    var newHabit = new habit(value, index, false);
    data.push(newHabit);
}

/**
 * renderList render the lists of to-do's and not-to-do's
 * as it was saved in the data var from previous sessions.
 */
function renderList() {
    document.getElementById('todo').innerHTML = "";
    document.getElementById('completed').innerHTML = "";
    document.getElementById('nottodo').innerHTML = "";
    document.getElementById('notdone').innerHTML = "";

    if (!data.length) {
        return;
    } else {
        for (var i = 0; i < data.length; i++) {
            if(data[i].good && !data[i].completed) {
                addItemToDOM(data[i].title, 1, 1);
            } else if(data[i].good && data[i].completed) {
                addItemToDOM(data[i].title, 2, 1);
            } else if(!data[i].good && !data[i].completed) {
                addItemToDOM(data[i].title, 3, 1)
            } else {
                addItemToDOM(data[i].title, 4, 1);
            }
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

    buttons.appendChild(remove);
    buttons.appendChild(complete);
    buttons.appendChild(edit);
    item.appendChild(buttons);

    list.insertBefore(item, list.childNodes[index]);
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

    var removeId = data[getIndex(value)].id;
    data.splice(getIndex(value), 1);

    parent.removeChild(item);

    $.ajax({type:'get',
        url:'/delete-habit/' +removeId,
        //data:"id=" + removeId
    });
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

    data[getIndex(value)].completed = !data[getIndex(value)].completed;

    var target;

    if (parentID === 'todo') {
        target = document.getElementById('completed');
    } else if (parentID === 'nottodo') {
        target = document.getElementById('notdone');
    } else if (parentID === 'notdone') {
        target = document.getElementById('nottodo');
    } else {
        target = document.getElementById('todo');
    }

    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);

    $.ajax({type:'get',
        url:'/finish',
        data:"id=" + data[getIndex(value)].id
    });
}

function editItem() {
    var item = this.parentNode.parentNode;
    var value;
    var oldValue = item.innerText;
    var parent = item.parentNode;
    var parentID = parent.id;

    if (parentID === 'todo' || parentID === 'completed') {
        value = document.getElementById('item').value;
        document.getElementById('item').value = '';
    } else {
        value = document.getElementById('item2').value;
        document.getElementById('item2').value = '';
    }

    item.innerText = value;
    data[getIndex(oldValue)].title = value;

    $.ajax({type:'get',
        url:'/edit-title',
        data:"id=" + data[getIndex(value)].id + "&title=" + value,
        success: function(data){
            alert('succesful');
        }
    });

}
