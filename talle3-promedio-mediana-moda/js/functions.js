 //-----------------------------CALCULATE THE AVERAGE-------------------

//  Function to calculate the average of a given array
function calculateAverage(list) {
    
    //  Get the addition of every element on an array
    let average = list.reduce( (accumulated = 0, actualValue) => {
        return accumulated += actualValue;
    });

    //  Divide the result by the length of the array
    average = average / list.length;

    //  Return the average
    return average;
}

//-----------------------------CALCULATE THE MEDiAN--------------------

//  Function to calculate the median of a given array
function calculateMedian(originalList) {

    const list = originalList;
    let listMiddle = parseInt(list.length / 2);
    let isEven;
    let median;

    //  Sort the array
    list.sort( ( a, b ) => a - b);

    //  Get a boolean to know if the list is even or odd
    isEven = ( list.length % 2 == 0 ) ? true : false;

    //  Get the median of the array
    if (isEven) {

        //  Get the average of the two middle elements
        const middleAverage = ( list[listMiddle - 1] + list[listMiddle] ) / 2;

        median = middleAverage;

    } else {

        median = list[listMiddle];

    }

    //  Return the median
    return median
}
//------------------------------CALCULATE THE MODE---------------------

//  Function to calculate the mode of a given array
function calculateMode(list) {

    let listCount = {};
    let mode;

    // Get the Count of every unique value of the array
    list.map( element => {
        ( listCount[element] ) ? listCount[element] += 1: listCount[element] = 1;
    });

    //  Turn object to array
    listCount = Object.entries(listCount);

    //  Sort the array by the amount of times appeared: Max to Min
    listCount.sort( ( a,b ) => b[1] - a[1] );

    //  Get the mode, even if the mode is more than 1 element
    mode = listCount.filter( element => element[1] == listCount[0][1]);

    console.log(listCount);     

    //  Print mode
    mode.forEach(element => {
        console.log(`the mode is element ${element[0]} it appears ${element[1]} times.`);
    });

    return mode;
}

