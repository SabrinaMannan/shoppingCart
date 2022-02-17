function updateCaseNumber(isIncreasing) {
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;

    if (isIncreasing == true) {
        caseInput.value = parseInt(caseNumber) + 1;

        //increase value when plus button is clicked
    }

    else {
        caseInput.value = parseInt(caseNumber) - 1;
        //decrese value when minus button is clicked
    }

}


document.getElementById('case-plus').addEventListener('click',
    function () {
        updateCaseNumber(true);

    });

document.getElementById('case-minus').addEventListener('click',
    function () {
        updateCaseNumber(false);


    })