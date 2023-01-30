'use strict';

fetch('./data1.json')
.then((response) => response.json())
.then((d) => {
    const team1 = document.querySelector('.team1');
    const team2 = document.querySelector('.team2');
    const date = document.querySelector('.date');
    team1.textContent = d.team1;
    team2.textContent = d.team2;
    date.textContent = d.date;
});

const openDays = ['Thursday', 'Friday', 'Saturday'];
const game = {
    /* Using american standard time open in the morning, close at PM night */
    [openDays[0]] : {
        open: 10,
        close: 8
    },
    [openDays[1]] : {
        open:10,
        close: 8
    },
    [openDays[2]] : {
        open:10,
        close: 8
    }
}

const oddObject = {
    odds: {
        "team1": 1.33,
        "x": 3.25,
        "team2": 6.5
      }
}

/* Opening Days */
const opening = Object.entries(game);
const bettingDays = document.querySelector('.betting');

for(const [key, { open, close }] of opening) {
    const newDay = document.createElement('h3');
    const newLine = document.createElement('p');
    newDay.classList.add('betting-days');
    newDay.textContent = `On ${key}, we are open from ${open} AM until ${close} PM. Make your bets soon.`;
    newLine.textContent = `------------------------`;
    bettingDays.appendChild(newDay);
    bettingDays.appendChild(newLine);
}

for(let [team, odd] of Object.entries(oddObject.odds)) {
    const odds = document.querySelector('.odds');
    let teams = '';
    switch(team) {
        case 'team1':
            teams = 'Bayern Munich';
            break;
        case 'team2':
            teams = 'Borrussia Dortmund';
            break;
        case 'x':
            teams = 'a tie';
            break;
    }
    const newOdds = document.createElement('h5');
    newOdds.classList.add('odds');
    newOdds.textContent = `Odds of ${teams} is ${odd}`;
    odds.appendChild(newOdds); 
}
