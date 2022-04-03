//-------------------------------------CALCULATE THE AVERAGE--------------------------------------------

function calculateAverage(list) {

    //  Get the addition of every element on the array
    const totalAddition = list.reduce( ( accumulated = 0, actualValue ) => {
        return accumulated += actualValue;
    });

    //  Get average
    const average = totalAddition / list.length;

    //  Return the average
    return average;
}

//----------------------------------CALCULATE THE MEDIAN SALARY-----------------------------------------

function calculateMedian(list) {

    let median;

    //  Check if the array is odd
    const isEven = (list.length % 2 === 0)? true: false;

    //  Get the middle of the array
    const middleList = parseInt(list.length / 2);

    //  Get median
    if (isEven) {
        //  Calculate the average of the 2 middle elements of the array
        median = calculateAverage([list[middleList - 1], list[middleList]]);
    } else {
        median = list[middleList];
    }

    //  Return the median
    return median;
}

function analyzeSalary(originaList) {
    
    //  Copy the original array to a new
    let list = originaList;

    //  Get salaries only
    list = list.map( element => {
        return element.salary;
    });

    //  Sort the salaties - low to high
    list.sort( ( a,b ) => a - b);
    console.log(list);
    
    //  Get the median of the list
    const median = calculateMedian(list);

    //  Get the top 10%
    const spliceStart = list.length * 0.9;
    const spliceQuantity = list.length - spliceStart;
    const top10Percent = list.splice(spliceStart, spliceQuantity);
    console.log(top10Percent);

    const medianTop10Percent = calculateMedian(top10Percent);
    
    //  Return an array wth the general median and the top 10 percent median
    return [median, medianTop10Percent];
}