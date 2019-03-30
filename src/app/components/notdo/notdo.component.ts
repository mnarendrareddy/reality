import { Component } from '@angular/core';

@Component({
  selector: 'app-notdo',
  templateUrl: './notdo.component.html',
  styleUrls: ['./notdo.component.css']
})
export class NotdoComponent {
  title = 'Notdo';
  cards: any[] = [
    {
      "id":"1",
      "p": "You have a current license and many community connections, but have no time for managing the details of real estate transactions;"
    },
    {
      "id":"2",
      "p": "You have connections who want to purchase property in distant markets;"
    },
    {
      "id":"3",
      "p": "You have connections who move into the local area with no knowledge of the area;"
    },
   
  ];
  cards1: any[] = [
    {
      "id":"4",   
      "p": "You have a license in one state but have moved elsewhere; you can still benefit from real estate transactions happening in your sphere."
    },
    {
      "id":"5",
      "p": "Still have questions? See  our FAQ’s page!"
    },
    {
      "id":"6",
      "p": " In sollicitudin at libero ac fermentum. Fusce arcu odio, pretium hendrerit enim eget, tempus mollis diam. "
    },
    ];
    
}
