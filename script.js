(function () {
    'use strict';
            let converterType = 'miles';
            let heading = document.querySelector('h1');
            let intro = document.querySelector('p');
            let ansdiv = document.getElementById('answer');
            let form = document.getElementById('convert');

            document.addEventListener('keydown', function (event) {
                var key = event.code;
                if (key === 'KeyK') {
                    converterType = 'kilometers';
                    heading.innerHTML = 'Kilometers to Miles converter';
                    intro.innerHTML = 'Enter the number of Kilometers and click the button to convert it into Miles';
                } else if (key === 'KeyM') {
                    converterType = 'miles';
                    heading.innerHTML = 'Miles to Kilometers converter';
                    intro.innerHTML = 'Enter the number of Miles and click the button to convert it into Kilometrs';
                }
            });

            form.addEventListener('submit', function (event) {
                event.preventDefault();

                let distance = parseFloat(document.getElementById('distance').value);
                if (distance){
                    if (converterType == 'miles') {
                        let converted = (distance * 1.609344).toFixed(3);
                        ansdiv.innerHTML = `<h2>${distance} Miles is equal to ${converted} Kilometers<h2>`;
                    } else if (converterType == 'kilometers') {
                        let converted = (distance * 0.621371192).toFixed(3);
                        ansdiv.innerHTML = `<h2>${distance} Kilometers is equal to ${converted} Miles<h2>`;
                    }
                } else {
                    ansdiv.innerHTML = '<h2> Please provide a number<h2>';
                }
            });

})();
 