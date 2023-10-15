let slider = document.querySelector("#myRange");
let divContainer = document.querySelector(".div-container");

const buttonBlack = document.querySelector("#Black");
const buttonRainbow = document.querySelector("#Rainbow");
const buttonEraser = document.querySelector("#Eraser");
const buttonClear = document.querySelector("#Clear");
const colorPicker = $("#colorChooser");

const mediaQuery = window.matchMedia('(max-width: 480px)');

slider.addEventListener("change", (event) => {
    clearGrid();
    createGrid(event.target.value);
}
)

function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $(".div-container").append("<div class='grid' ></div>");
        };
    };

    $(".grid").css("backgroundColor", "white");

    if (mediaQuery.matches) {
        $(".grid").width(300 / x);
        $(".grid").height(300 / x);
    } else {
        $(".grid").width(500 / x);
        $(".grid").height(500 / x);
    }
};

function black() {
    $(this).css("background-color", "black");
}

function eraser() {
    $(this).css("background-color", "white");
}

function rainbow() {
    const arrayOfColorFunctions = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

    let randomColorString = '#';

    for (let x = 0; x < 6; x++) {
        let index = Math.floor(Math.random() * 16)
        let value = arrayOfColorFunctions[index]
        randomColorString += value
    }
    $(this).css("background-color", randomColorString);
}

function color(event) {
    const colorChoo = event.target.value;
    $(".grid").mouseover(function () {
        $(this).css("background-color", colorChoo);
    })
}

function clearGrid() {
    $(".grid").remove();
};

$(document).ready(function () {
    createGrid(16);
    $(".grid").mouseover(black);

    colorPicker.on("input", color);
    buttonBlack.addEventListener("click", () => {
        $(".grid").mouseover(black);
    });
    buttonRainbow.addEventListener("click", () => {
        $(".grid").mouseover(rainbow);
    });
    buttonEraser.addEventListener("click", () => {
        $(".grid").mouseover(eraser);
    });
    buttonClear.addEventListener("click", () => {
        $(".grid").css("background-color", "white");
    });
});


