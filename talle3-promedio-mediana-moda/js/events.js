//-------------------------------------------EVENTS-------------------------------

//  Variables input
const list = document.getElementById("values");

//  Variables buttons
const average = document.getElementById("average");
const median = document.getElementById("median");
const mode = document.getElementById("mode");

//  Variable for the output
const result = document.getElementById("result");

//  Event listener
average.addEventListener("click", getAverage);
median.addEventListener("click", getMedian);
mode.addEventListener("click", getMode);

//  Event to show the average result
function getAverage() {
    //  Convert the input to an array
    let myList = list.value.split(",");

    //  Convert every element to a number
    myList = myList.map( element => Number(element) );

    //  Calculate average
    const average = calculateAverage(myList);

    // Display result
    result.innerHTML = `The average is: <br>${average.toFixed(2)}`;
}

//  Event to show the median result
function getMedian() {
    //  Convert the input to an array
    let myList = list.value.split(",");

    //  Convert every element to a number
    myList = myList.map( element => Number(element) );

    //  Calculate average
    const median = calculateMedian(myList);
    console.log(median);

    // Display result
    result.innerHTML = `The median is: <br>${median}`;
}

//  Event to show the mode result
function getMode() {
    //  Convert the input to an array
    let myList = list.value.split(",");

    //  Convert every element to a number
    myList = myList.map( element => Number(element) );

    //  Calculate average
    const mode = calculateMode(myList);

    //  Get the elements that are the mode
    const modeElement = mode.map(element => {
        return element[0];
    }).join(", ");

    //  Get the times the mode appears
    const modeTimes = mode[0][1];

    // Display result
    result.innerHTML = `The mode is: ${modeElement} <br>It appears: ${modeTimes} times`;
}