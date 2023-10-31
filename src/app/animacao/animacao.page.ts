import { Component, OnInit, HostBinding  } from '@angular/core';
import {trigger,state,style,animate,transition, } from '@angular/animations';


@Component({
  selector: 'app-animacao',
  templateUrl: './animacao.page.html',
  styleUrls: ['./animacao.page.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  

    trigger('botaoFade', [
      state('fadeIn', style({
        opacity: 1,
        marginLeft: 0
      })),
      state('fadeOut', style({
        opacity: 0.5,
        backgroundColor: 'blue'
      })),
      transition('fadeIn => fadeOut', [
        animate('0.4s')
      ]),
      transition('fadeIn => fadeOut', [
        animate('0.4s')
      ]),
    ]),
  ],

  }
)
export class AnimacaoPage implements OnInit {
  isOpen = true;
  fade = true;

  setPosicao(event: CustomEvent<scrollDetails>){
    console.log(event.detail.scrollTop);
    if(event.detail.scrollTop > 15)
    this.isOpen = true;
    else
    this.isOpen = false;

  }
    

  setFade(){
    this.fade = !this.fade;
  }

  toggle(){
    this.isOpen = !this.isOpen;
  }


  constructor() { }

  ngOnInit() {
  }

}
