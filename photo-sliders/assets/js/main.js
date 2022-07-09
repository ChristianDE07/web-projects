document.getElementById("openedImage").style.display = "none";
document.querySelector("body").style.position = "absolute";
function openImage(id) {
    document.getElementById("openedImage").style.display = "block";
    document.querySelector("body").style.position = "fixed";
    document.getElementById("openedImage").style.position = "relative";
    document.getElementById("openedImage").innerHTML =
        "<img src='./assets/images/"+id+".jpg' class='opened'>";
}
function closeImage() {
    document.getElementById("openedImage").style.display = "none";
    document.querySelector("body").style.position = "absolute";
}

///// Random Slides /////
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let random = getRandomInt(3);

if(random === 0) {
    document.querySelector(".sliders-1").remove();
    document.querySelector(".sliders-2").remove();
}else if(random === 1) {
    document.querySelector(".sliders-0").remove();
    document.querySelector(".sliders-2").remove();
}else {
    document.querySelector(".sliders-0").remove();
    document.querySelector(".sliders-1").remove();
}

///// Sliders /////
var columns = document.querySelectorAll('.slide');
var draggingClass = 'dragging';
var dragSource;

Array.prototype.forEach.call(columns, function (col) {
    col.addEventListener('dragstart', handleDragStart, false);
    col.addEventListener('dragenter', handleDragEnter, false)
    col.addEventListener('dragover', handleDragOver, false);
    col.addEventListener('dragleave', handleDragLeave, false);
    col.addEventListener('drop', handleDrop, false);
    col.addEventListener('dragend', handleDragEnd, false);
});

function handleDragStart (evt) {
    dragSource = this;
    evt.target.classList.add(draggingClass);
    evt.dataTransfer.effectAllowed = 'move';
    evt.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver (evt) {
    evt.dataTransfer.dropEffect = 'move';
    evt.preventDefault();
}

function handleDragEnter (evt) {
    this.classList.add('over');
}

function handleDragLeave (evt) {
    this.classList.remove('over');
}

function handleDrop (evt) {
evt.stopPropagation();

if (dragSource !== this) {
    dragSource.innerHTML = this.innerHTML;

    const sourceID = dragSource.id;
    const destinationID = this.id;

    const sourceClass = dragSource.className;
    const destinationClass = this.className;

    dragSource.id = destinationID;
    this.id = sourceID;

    dragSource.className = destinationClass;
    this.className = sourceClass;

    this.innerHTML = evt.dataTransfer.getData('text/html');
}

evt.preventDefault();
}

function handleDragEnd (evt) {
    Array.prototype.forEach.call(columns, function (col) {
        ['over', 'dragging'].forEach(function (className) {
            col.classList.remove(className);
        });
    });
}