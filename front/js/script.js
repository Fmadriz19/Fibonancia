document.getElementById("btn1").addEventListener('click', () => {
    document.getElementById("div1").style.display = "block";
    document.getElementById("div2").style.display = "none";
});

document.getElementById("btn2").addEventListener('click', () => {
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "block";
});

// Fibonacci
document.getElementById('fibonacciForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const number = document.getElementById('number').value;
    if (number > 0) {
        fetch(`http://127.0.0.1:5000/fibonacci/${number}`)
        .then(response => response.json())
            .then(data => {
                document.getElementById('result').innerText = `El ${number}-ésimo término de Fibonacci es: ${data.result}`;
            });
    } else {
        alert('Por favor, ingrese un número positivo distinto de 0.');
    }
});

LCS
document.getElementById('lcsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const string_1 = document.getElementById('cadena1').value;
    const string_2 = document.getElementById('cadena2').value;

    if (length.string_1 > 0 && length.string_2 > 0) {

        const data = {
            str1: string_1,
            str2: string_2,
        };

        fetch('http://127.0.0.1:5000/lcs', {body: JSON.stringify(data),
        })
        .then(response => response.json())
            .then(data => {
                document.getElementById('result-2').innerText = `La longitud de la subsecuencia común más larga entre las cadenas es: ${data.result}`;
            })
        .catch(error => {
            console.error('Error:', error);
        });
    } 
});
