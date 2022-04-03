//------------------------------------------------EVENTS---------------------------------------------

//  Variable output
const result = document.getElementById("result");

//  Variable button
const analyze = document.getElementById("button");

//  Event listener
analyze.addEventListener("click", showAnalysis);


//  Function to calculate and show the result of the analysis
function showAnalysis() {
    const analysis = analyzeSalary(people);

    result.innerHTML = `The median salary is: ${analysis[0]} USD <br>The median salary of the top 10% is: ${analysis[1]} USD`;
}