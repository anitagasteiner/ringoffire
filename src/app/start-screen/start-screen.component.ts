import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent {

  constructor(private router: Router) { // Ich importiere den Router, weil ich mich damit zu einer neuen Seite weiterleiten möchte. Das "private" brauche ich, weil ich den Router nur in dieser Componente benutzen möchte. Würde ich ihn auch im HTML-Teil verwenden wollen, würde ich hier "public" davorschreiben.
  }

  newGame() {
    //Start game
    this.router.navigateByUrl('/game'); // Weiterleitung zur Game-Componente
  }

}
