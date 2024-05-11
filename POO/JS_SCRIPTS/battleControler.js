
const player1Field = document.getElementById("battlefieldPlayer1");
const player2Field = document.getElementById("battlefieldPlayer2");
let CharacterObject = `<div class="character">
<h3 class="character__name">{name}</h3>
<span class="character__health">{health}</span>
<progress value="{healthbar}" max="{maxHealthbar}"></progress>
</div>`;

let player1Characters = [];
let player2Characters = [];



player1Field.addEventListener("click",() => {
    AddCharacter("Player 1",player1Field)
    
})

player2Field.addEventListener("click",() => {
    AddCharacter("Player 2",player2Field);
})

function AddCharacter(name,battlefield)
{
    let characterAdded = new Character(name,100);
    player1Characters.push(characterAdded);
    let CharacterStructure = CharacterObject.replace("{name}",characterAdded.Name);
    CharacterStructure = CharacterStructure.replace("{health}",characterAdded.Health);
    CharacterStructure = CharacterStructure.replace("{healthbar}",characterAdded.Health);
    CharacterStructure = CharacterStructure.replace("{maxHealthbar}",characterAdded.MaxHealth);
    battlefield.innerHTML += CharacterStructure;
}