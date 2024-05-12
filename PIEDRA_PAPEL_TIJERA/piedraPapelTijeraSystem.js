
const playerScoreElement = document.getElementById("puntuacion__player");
const comScoreElement = document.getElementById("puntuacion__com");

const optionsElement = document.getElementById("options");

const imgBattlePlayer = document.getElementById("imgBattlePlayer");
const imgBattleCom = document.getElementById("imgBattleCom");

const imgEligiendo = "Imagenes/ELIGIENDO.png";
const imgPiedra = "Imagenes/Piedra.png";
const imgPapel = "Imagenes/Papel.png";
const imgTijeras = "Imagenes/Tijeras.png";

const battleContainerPlayer = document.getElementById("battleContainerPlayer");
const battleContainerCom = document.getElementById("battleContainerCom");


const options = {
    None: 0,
    Piedra: 1,
    Papel: 2,
    Tijeras: 3
}

let PlayerSelectedOption = options.None;
let ComSelectedOption = options.None;

let playerScore = 0;
let comScore = 0;


optionsElement.addEventListener("click",(event) => {
    if (PlayerSelectedOption != options.None) return;
    switch (event.target.id) {
        case "piedra__option":
            imgBattlePlayer.setAttribute("src",imgPiedra);
            PlayerSelectedOption = options.Piedra;
            playRound();
            break;
        case "papel__option":
            imgBattlePlayer.setAttribute("src",imgPapel);
            PlayerSelectedOption = options.Papel;
            playRound();
            break;
        case "tijeras__option":
            imgBattlePlayer.setAttribute("src",imgTijeras);
            PlayerSelectedOption = options.Tijeras;
            playRound();
            break;
    }
    
})


function ComSelect(){
    return Math.floor(Math.random() * 3) + 1;
}

function playRound()
{
    ComSelectedOption = ComSelect();
    console.log(ComSelectedOption);
    switch (ComSelectedOption) {
        case options.Piedra:
            imgBattleCom.setAttribute("src",imgPiedra);
            switch (PlayerSelectedOption) {
                case options.Piedra:
                    empate();
                    break;
            
                case options.Papel:
                    winPlayer();
                    break;

                case options.Tijeras:
                    winCom();
                    break;
            }
            break;
    
        case 2:
            imgBattleCom.setAttribute("src",imgPapel);
            switch (PlayerSelectedOption) {
                case options.Papel:
                    empate();
                    break;
            
                case options.Tijeras:
                    winPlayer();
                    break;

                case options.Piedra:
                    winCom();
                    break;
            }
            break;

        case 3:
            imgBattleCom.setAttribute("src",imgTijeras);
            switch (PlayerSelectedOption) {
                case options.Tijeras:
                    empate();
                    break;
            
                case options.Piedra:
                    winPlayer();
                    break;

                case options.Papel:
                    winCom();
                    break;
            }
        break;
    }
    updateTextScore();

    setTimeout(reset, 1300);

}


function winPlayer()
{
    playerScore++;
    battleContainerPlayer.classList.add("battle__container--win")
    battleContainerCom.classList.add("battle__container--loss");
}

function winCom()
{
    comScore++;
    battleContainerPlayer.classList.add("battle__container--loss")
    battleContainerCom.classList.add("battle__container--win");
}

function empate()
{
    battleContainerPlayer.classList.add("battle__container--draw")
    battleContainerCom.classList.add("battle__container--draw");
}

function reset()
{
    PlayerSelectedOption = options.None;
    ComSelectedOption = options.None;
    imgBattlePlayer.setAttribute("src",imgEligiendo);
    imgBattleCom.setAttribute("src",imgEligiendo);
    if (battleContainerCom.classList.contains("battle__container--win"))
    {
        battleContainerCom.classList.remove("battle__container--win")
    }
    else if (battleContainerCom.classList.contains("battle__container--loss"))
    {
        battleContainerCom.classList.remove("battle__container--loss")
    }
    else if (battleContainerCom.classList.contains("battle__container--draw"))
    {
        battleContainerCom.classList.remove("battle__container--draw")
    }


    if (battleContainerPlayer.classList.contains("battle__container--win"))
    {
        battleContainerPlayer.classList.remove("battle__container--win")
    }
    else if (battleContainerPlayer.classList.contains("battle__container--loss"))
    {
        battleContainerPlayer.classList.remove("battle__container--loss")
    }
    else if (battleContainerPlayer.classList.contains("battle__container--draw"))
    {
        battleContainerPlayer.classList.remove("battle__container--draw")
    }
}

function updateTextScore()
{
    playerScoreElement.textContent = playerScore;
    comScoreElement.textContent = comScore;
}