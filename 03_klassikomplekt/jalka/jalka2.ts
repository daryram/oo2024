class Player {
    private _name: string;
    private _team: any;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    get team(): Team {
        return this._team;
    }

    set team(value: Team) {
        this._team = value;
    }
}

class Team {
    private _players: Player[] = [];
    private _name: string;


    constructor(name: string) {
        this._name = name;
    }

    startGame(): void {
        // init players
    }

    addPlayer(player: Player): void {
        if (player.team == null) {
            this._players.push(player);
            player.team = this;
        }
    }


    get players(): Player[] {
        return this._players;
    }


    get name(): string {
        return this._name;
    }
}

class Ball {

}

class Stadium {

}

class Game {
    private _homeTeam: Team;
    private _awayTeam: Team;
    private _stadium: Stadium;
    public _ball: Ball = new Ball();

    constructor(homeTeam: Team, awayTeam: Team, stadium: Stadium) {
        this._homeTeam = homeTeam;
        this._awayTeam = awayTeam;
        this._stadium = stadium;
    }


    start(): void {
        this._ball = new Ball();

    }

    get homeTeam(): Team {
        return this._homeTeam;
    }

    get awayTeam(): Team {
        return this._awayTeam;
    }

    get stadium(): Stadium {
        return this._stadium;
    }
}
//let isik1:Player = new Player("juku");
