import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit, OnChanges {

  cardAction = [
    {
      title: 'Waterfall',
      description: 'Everyone should keep drinking until the person who picked the card stops. So who knows how long you will be going for!'
    },
    {
      title: 'You',
      description: 'You can choose someone to drink!'
    },
    {
      title: 'Me',
      description: 'You must drink!'
    },
    {
      title: 'Category',
      description: 'Pick a category (such as colors) and you go in a circle and everyone has to say a word that fits with the category. Whoever messes up, drinks!'
    },
    {
      title: 'Bust a jive',
      description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one.'
    },
    {
      title: 'Boys',
      description: 'All boys drink!' 
    },
    {
      title: 'Heaven',
      description: 'Point your finger in the sky, whoever is last must drink!'
    },
    {
      title: 'Mate',
      description: 'Choose someone to drink with you. He/she, your drinking buddy, should always drink with you.'
    },
    {
      title: 'Thumb Master',
      description: 'When you put your thumb on the table everyone must follow and whomever is last must drink. You are the thumb master till someone else picks a five.'
    },
    {
      title: 'Girls',
      description: 'All girls drink!'
    },
    {
      title: 'Questions',
      description: 'Go around in a circle and you have to keep asking questions to each other. Doesn’t matter what the question is, as long as its a question. Whoever messes up and does not say a question, drinks.'
    },
    {
      title: 'Never have I ever&nbsp;...',
      description: 'Say something you never did. Everyone who did it has to drink.'
    },
    {
      title: 'Rule',
      description: 'Make a rule. Everyone needs to drink when s*he breaks the rule.'
    }
  ];

  title: string = '';
  description: string = '';

  @Input() card!: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log('Current card: ', this.card);
  }

}