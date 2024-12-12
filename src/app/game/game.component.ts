import { Component, OnInit } from '@angular/core';
import { Game } from './../../models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game = {
    players: [],
    stack: [],
    playedCards: [],
    currentPlayer: 0
  };
  // Variable "game" vom Typ "Game" (oben importiert)

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    if (!this.pickCardAnimation) {      
      let pickedCard: string = JSON.stringify(this.game.stack.pop());
      this.currentCard = pickedCard.substring(1, pickedCard.length-1); // Mit "pop()" nehme ich den letzten Wert aus dem Array und gleichzeitig wird dieser dann aus dem Array entfernt.
      this.pickCardAnimation = true;      
      console.log('New card: ' + this.currentCard);
      console.log('Game is', this.game);      
      setTimeout(() => {        
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
        this.game.currentPlayer++;
        this.game.currentPlayer = this.game.currentPlayer % this.game.players.length; // Modulo-Operator -> wird wieder auf 0 gesetzt, wenn Länge (Anzahl) der "players" erreicht wurde
      }, 1000);
    }    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);
    dialogRef.afterClosed().subscribe((name:string) => {
      this.game.players.push(name);
    });
  }

}
