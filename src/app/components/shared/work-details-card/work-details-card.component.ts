import { Component } from '@angular/core';

@Component({
  selector: 'app-work-details-card',
  templateUrl: './work-details-card.component.html',
  styleUrls: ['./work-details-card.component.css']
})
export class WorkDetailsCardComponent {
  data=[
    1,2,4
]

showDetails(){
  console.log("object");
}
}
