function setPlayerNameToPlayerList(btnId, nameId) {

    document.getElementById(btnId).addEventListener('click', function() {

        const playerList = document.getElementById('player-list'); //ekhne store krbo

        const nameElement = document.getElementById(nameId); //Jei name gula k ante hobe take ai variable a rakhlam

        const name = nameElement.innerText;

        const li = document.createElement('li');
        li.innerText = name;


        const list = document.querySelectorAll('#player-list li');
        if (list.length < 5) {
            playerList.appendChild(li);

            const button = document.getElementById(btnId);
            button.setAttribute('disabled', true);
            button.style.backgroundColor = 'gray';
        } else {
            alert('You Have To  Select Only Five Player');
        }

    })
}
setPlayerNameToPlayerList('player1-btn', 'player1-name');
setPlayerNameToPlayerList('player2-btn', 'player2-name');
setPlayerNameToPlayerList('player3-btn', 'player3-name');
setPlayerNameToPlayerList('player4-btn', 'player4-name');
setPlayerNameToPlayerList('player5-btn', 'player5-name');
setPlayerNameToPlayerList('player6-btn', 'player6-name');
setPlayerNameToPlayerList('player7-btn', 'player7-name');