import { Component } from '@angular/core';
import { ConferanceDetails } from '../conferance-details/conferance-details';

@Component({
  selector: 'app-conferance-list',
  imports: [ConferanceDetails],
  templateUrl: './conferance-list.html',
  styleUrl: './conferance-list.css',
})
export class ConferanceList {
  conferances :any[]=[
    {name:"angular",date:"2023-01-01",place:"tunis"},
    {name:"react",date:"2023-02-01",place:"sfax"},
    {name:"vue",date:"2023-03-01",place:"sousse"},
  ]
  increment(){
    alert("increment");
  }
}
