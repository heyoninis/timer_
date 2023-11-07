// Defina as variáveis globais aqui, mas não leia seus valores ainda, só chama
let minutesInput, secondsInput;

const countdownElement = document.getElementById("countdown"); // é a div que mostra o tempo
const showNameElement = document.getElementById("showName"); // Onde mostra o nome do timer
const buttonStart = document.getElementById("startButton"); // botão para iniciar timer
const buttonSave = document.getElementById("saveInfo"); // botão que salva as infos do input
const buttonBack = document.getElementById("backButton"); // botão para retornar a tela de info salva
const buttonRedo = document.getElementById("redoButton"); // refazer funcionar o timer


const form = document.getElementById("timer"); // div onde ta os inputs de tempo

// Setando o style dos botões ao iniciar a página

showNameElement.style.display = "none";
buttonRedo.style.display = "none";
buttonBack.style.display = "none";
buttonStart.style.display = "none";

function saveInfo() {
    // Leia os valores dos elementos de entrada dentro da função
    nameInput = document.getElementById("nameInput").value;
    minutesInput = document.getElementById("minutesInput").value;
    minutesSave = document.getElementById("minutesInput").value;
    secondsInput = document.getElementById("secondsInput").value;
    secondsSave = document.getElementById("secondsInput").value;

    if (!minutesInput && !secondsInput) {
        alert("Por favor insira valores para minutos e/ou segundos");
    } else {
        minutesInput = minutesInput || "00";
        secondsInput = secondsInput || "00";

        if (secondsInput < 10 && secondsInput > 0) {
            secondsInput = "0" + secondsInput;
        }

        if (minutesInput < 10 && minutesInput > 0) {
            minutesInput = "0" + minutesInput;
        }

        form.style.display = "none";
        buttonStart.style.display = "block";
        showNameElement.style.display = "block";


        countdownElement.innerHTML = minutesInput + ":" + secondsInput;
        showNameElement.innerHTML = nameInput;
    }
}


// Ver se vai funcionar cpom tudo
document.addEventListener("DOMContentLoaded", function () {

    // Aqui está chamando os itens lá do html
    const minutesInput = document.getElementById("minutesInput");
    const secondsInput = document.getElementById("secondsInput");
    const startButton = document.getElementById("startButton");
    const countdownElement = document.getElementById("countdown");

    // Essa variavel está indefinida pois ela é usada para saber se tem algo sendo rodao, ou seja, se tiver já uma contagem rodando o timer vai ter um valor, caso cotrárioele não vai ter. (Não entendi muito bem, mas sem isso não vai funcionar direito)
    let timer;

    // Onclick lá do html, ta adicionando um evento
    // Como no botão lá não tem um onclick, ele é adicionado aqui usando o addEventListener
    startButton.addEventListener("click", function () {

        buttonStart.style.display = "none";
        // Esse || 0, significa que tudo bem se o valor inserido for 0, ainda é valido e não vai dar erro
        const minutes = parseInt(minutesInput.value || 0, 10);
        const seconds = parseInt(secondsInput.value || 0, 10);

        // Tempo a ser mostrado
        const totalTime = minutes * 60 + seconds;

        // Se tiver qualquer valor maior que 0 significaque pode começar a função
        if (totalTime > 0) {
            startCountdown(totalTime);
        }

    });


    function startCountdown(totalTime) {

        // Limpa qualquer valor que poderia ter antes rodando em Timer
        clearInterval(timer);

        // Começa a rodar o tempo
        let remainingTime = totalTime;

        // Essa função atualida o código a cada 1000, ou seja 1s
        function updateCountdown() {
            // Ve q quantidade de minutos em relação a quantidade desegundos existentes
            // Ex: se tem 300 segundos restantes, divide por 60 e vão ser 5 minutos
            const minutes = Math.floor(remainingTime / 60);

            // Divide o numero de minutos para segundos e pega o que sobra dessa divisão (Ou seja o que não é minutos e mostra como segundos)
            const seconds = remainingTime % 60;

            // aqui mostra tudo isso no html
            countdownElement.innerHTML = `${minutes}m ${seconds}s`;
            showNameElement.style.display = "block";


            if (remainingTime === 0) {

                // Se acabar mostra a msn e limpa o timer
                buttonStart.style.display = "block";
                showNameElement.style.display = "block";


                // minutesSave = minutesSave || "00";
                // secondsSave = secondsSave || "00";

                while (secondsSave.length === 1) {

                    if (secondsSave < 10 && secondsSave !== 0) {
                        secondsSave = "0" + secondsSave;
                    }

                    if (secondsSave === null) {
                        secondsSave === "00"
                    }

                }

                while (minutesSave.length === 1) {

                    if (minutesSave < 10 && minutesSave !== 0) {
                        minutesSave = "0" + minutesSave;
                    }


                    if (minutesSave === 0) {
                        minutesSave === "00"
                    }
                }

                countdownElement.innerHTML = minutesSave + ":" + secondsSave;


            } else {

                showNameElement.style.display = "block";
                buttonStart.style.display = "none";

                // Se não, vai tirando um do valor do remainin time
                remainingTime--;

            }

        }

        // Aqui controla quando começa
        updateCountdown();

        // aqui fala quantas vezes a função deve ser executada
        timer = setInterval(updateCountdown, 1000);
    }


});

