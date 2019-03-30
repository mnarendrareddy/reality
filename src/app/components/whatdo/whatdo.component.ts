import { Component } from '@angular/core';

@Component({
  selector: 'app-whatdo',
  templateUrl: './whatdo.component.html',
  styleUrls: ['./whatdo.component.css']
})
export class WhatdoComponent {
  title = 'Whatdo';
  cards: any[] = [
    {
      "img":"../../../assets/hand.svg",
      "p": "Maintains a current real estate license."
    },
    {
      "img":"../../../assets/library.svg",
      "p": "Completes all required Continuing Education requirements to keep license current."
    },
    {
      "img":"../../../assets/test.svg",
      "p": "Renew license as scheduled according to local requirements."
    },
    {
      "img" :"../../../assets/hand.svg",
      "p": "Submits referral clients through the RRR portal."
    },
   
  ];

   
}