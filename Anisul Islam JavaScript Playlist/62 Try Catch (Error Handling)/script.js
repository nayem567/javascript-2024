

const button = document.getElementById('numberButton');

button.addEventListener('click', () => {

    const userNumber = document.getElementById('number').value;

    try {
        if (userNumber < 5) {
            throw "Number is too low";
        }
        else if (userNumber > 10) {
            throw "Number is too high";
        }
    }
    catch (err) {
        console.log(err);
    }



})