import { Component } from '@angular/core';
import { Work } from 'src/app/interfaces/word.interface';
import { list } from 'src/app/portfolio';

@Component({
  selector: 'app-work-details-card',
  templateUrl: './work-details-card.component.html',
  styleUrls: ['./work-details-card.component.css']
})
export class WorkDetailsCardComponent {
  workList:Work[] = list


showDetails(){
  console.log("object");
}
}
