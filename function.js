var width = 0
var height = 0


function calculate() {
    width = Number(document.getElementById("width").value)

    height = Number(document.getElementById("height").value)
    var area = calculate1(width, height)
    // alert("Area of triangle of width: " + width + " and height: " + height + " is: " + area)
}


function calculate1(width, height) {
    if (typeof width !== 'number') {
        throw Error("The given argument is not a number")
    }

    else {
        var area = 1 / 2 * (width * height)
        document.getElementById('result').innerHTML = area;

    }


    return area;
}