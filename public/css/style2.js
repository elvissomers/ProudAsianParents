@charset "UTF-8";

body,input,button{
    font-family: 'Roboto', sans-serif;
}

body{
    background:#edf0f1;
    padding: 80px 0 0 0;
}

.noFill{
    fill:none;
}

.column {
    width:350px;
    height:80px;
    position:fixed;
    padding:15px;
    top:0;
    left:0;
    z-index:5;
    background:#25b99a;
    box-shadow:0px 2px 4px rgba(44,62,80,0.15);
    border-bottom-right-radius:10px;
    border-bottom-left-radius:10px;
}

.column input{
    width:100%;
    height:50px;
    float:left;
    color:#fff;
    font-size: 15px;
    font-weight: 400;
    text-indent:15px;

    /* This is to make the pointer stop slightly left of the the button,
    when filling in a habit. */
    padding: 0 60px 0 0;

    background:rgba(255, 255, 255, 0.2);

    border-top-left-radius:5px;
    border-bottom-left-radius:5px;
    border-top-right-radius:25px;
    border-bottom-right-radius: 25px;
    
    border:0px;
    box-shadow:none;
    outline:none;
    
    /* These are fixes to make the app run in any browser */
    -webkit-appearance:none;
    -moz-appearance:none;
    -ms-appearance:none;
    -o-appearance:none;
    /* appearance:none; */


}

/* These are fixes to make the app run in any browser */

.column input::-webkit-input-placeholder{
    color:rgba(255,255,255,0.8);
}

.column input::-moz-input-placeholder{
    color:rgba(255,255,255,0.8);
}

.column input::-wmoz-input-placeholder{
    color:rgba(255,255,255,0.8);
}

.column input::-ms-input-placeholder{
    color:rgba(255,255,255,0,8);
}

/* The button to click on when you want to add an habit */

.column button{
    width:50px;
    height:50px;
    position:absolute;
    top:15px;
    right:15px;
    z-index:2;
    border-radius:25px;
    background:#fff;
    border:0px;
    box-shadow:none;
    outline: none;
    cursor: pointer;

    /* These are fixes to make the app run in any browser */
    -webkit-appearance:none;
    -moz-appearance:none;
    -ms-appearance:none;
    -o-appearance:none;
    /* appearance:none; */
}

.column button svg{
    width:16px;
    height:16px;
    position: absolute;
    top: 50%;
    left:50%;
    margin:-8px 0 0 -8px;
}

.column button svg .fill{
    fill:#25b99a;
}

.container{
    width:350px;
    float:left;
    padding:15px;
}


ul.todo{
    width:100%;
    float: left; 

}

ul.todo li{
    width:100%;
    min-height:50px;
    float:left;

    font-size:14px;
    font-weight:500;
    color:#444;
    line-height:22px;
    background:#fff;
    border-radius:5px;
    position:relative;

    box-shadow:0px 1px 2px rgba(44,62,80,0.1);
    margin: 0 0 10px 0;
    padding: 14px 100px 14px 14px;
    white-space: pre-wrap;

}


ul.todo li:last-of-type{
    margin:0;
}


ul.todo li .buttons{
    width: 100px;
    height:50px;
    position:absolute;
    top:0;
    right:0;
}

ul.todo li .buttons button{
    width: 50px;
    height:50px;
    float:left;
    background:none;
    position:relative;
    border:0px;
    box-shadow: none;
    outline:none;
    cursor: pointer;

    /* These are fixes to make the app run in any browser */
    -webkit-appearance:none;
    -moz-appearance:none;
    -ms-appearance:none;
    -o-appearance:none;
    /* appearance:none; */
}

ul.todo li .buttons button:last-of-type:before{
    content:'';
    width:2px;
    height:30px;
    position:absolute;
    top:10px;
    left:0;
    background:#edf0f1;
}


ul.todo .buttons button svg{
    width:22px;
    height:22px;
    position:absolute;
    top:50%;
    left:50%;
    margin: -11px 0 0 -11px;
}

ul.todo li .buttons button.complete svg{
    border-radius: 11px;
    border:1.5px solid #25b99a;

    -webkit-transition: background 0.2s ease;
    -moz-transition: background 0.2s ease;
    -ms-transition: background 0.2s ease;
    -o--transition: background 0.2s ease;
    transition: background 0.2s ease;
}

/* Hashtag for id, dot for class */

ul.todo#completed li .buttons button.complete svg{
   background:#25b99a;
   border:0px; 
}

ul.todo:not(#completed) .buttons button.complete:hover svg {
    background:rgba(37,185,154,0.75);
}

ul.todo:not(#completed) .buttons button.complete:hover svg .fill{
    fill:#fff;
}

ul.todo#completed li .buttons button.complete svg .fill{
    fill:#fff;
}

ul.todo li .buttons button svg .fill{
    -webkit-transition: fill 0.2s ease;
    -moz-transition: fill 0.2s ease;
    -ms-transition: fill 0.2s ease;
    -o-transition: fill 0.2s ease;
    transition: fill 0.2s ease;

}

ul.todo .buttons button svg .fill{
    fill:#c0cecb;
}

ul.todo .buttons button.remove:hover svg .fill{
    fill:#e85656;
 }

 ul.todo .buttons button.complete svg .fill{
    fill:#25b99a;
 }

 ul.todo#completed{
     position:relative;
     padding:60px 0 0 0;
 }

 /* Check this stuff */
 ul.todo#completed:before {
     content: '';
     width:150px;
     height:2px;
     background:#d8e5e0;
     position:relative;
     top:30px;
     left:50%;
     margin: 0 0 0 -75px;
 }

 /* ul.todo#todo:after{
     content: 'You have nothing to do!';
     margin:15px 0 0 0;
 }

 ul.todo#completed:after{
     content: "You have not yet completed any tasks."
 }

 ul.todo#todo:after,
 ul.todo#completed:after{
     width:100%;
     display:block;
     text-align:center;
     font-size:12px;
     color:#aaa;
 } */