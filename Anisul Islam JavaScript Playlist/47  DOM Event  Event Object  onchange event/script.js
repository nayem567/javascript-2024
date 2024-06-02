
// input
var input = document.querySelector('input[id=name]');

input.addEventListener('change', changeListener);

function changeListener(event) {
    var typedValue = event.target.value;
    console.log(typedValue);
}

// checkbox 

var programs = document.querySelectorAll('input[name=program]');

console.log(programs);

programs.forEach(program => {
    program.addEventListener('change', changeListener);

    function changeListener(event) {

        if (event.target.checked) {
            // printing checked box
            var checkedBox = event.target.value;
            console.log(checkedBox);

            // printing wheater checked
            console.log('checked');
        }
    }

});




