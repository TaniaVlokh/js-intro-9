class Player {
    constructor(nichName, score) {
        this.nichName = nichName;
        this.score = score;
    }
    getInfo() {
        return `${this.nichName}'s score is ${this.score}`
    }
    attack(obj2) {
        this.score += 1;
        obj2.score -= 1;

    }
    damage() {
        this.score -= 1;
    }
}

class SuperPlayer extends Player {
    constructor(nichName, score) {
        super(nichName, score);

    }
    superAttack(obj2) {
        this.score += 2;
        obj2.score -= 2;
    }

}

class HeroPlayer extends Player {
    constructor(nichName, score) {
        super(nichName, score);
    }
    heal(obj) {
        //  this.score += 1;
        obj.score += 1;
    }
}

const player1 = new Player('Player 1', 5);
const player2 = new Player('Player 2', 5);

const superPlayer = new SuperPlayer('Super Player', 3)
const heroPlayer = new HeroPlayer('Hero Player', 10)

player1.attack(player2);

player1.attack(superPlayer);


superPlayer.superAttack(player1)
superPlayer.superAttack(player2)
superPlayer.superAttack(heroPlayer)




heroPlayer.heal(player1)
heroPlayer.heal(player2)


player1.attack(superPlayer);
player2.attack(superPlayer);
heroPlayer.attack(superPlayer);



player1.damage();
player2.damage();

const allPlayers = [player1, player2, superPlayer, heroPlayer]

for (const player of allPlayers) {
    console.log(player.getInfo())
}
