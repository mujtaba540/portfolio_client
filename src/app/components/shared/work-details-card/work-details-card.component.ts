import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Work } from 'src/app/interfaces/word.interface';
import { list } from 'src/app/portfolio';

@Component({
  selector: 'app-work-details-card',
  templateUrl: './work-details-card.component.html',
  styleUrls: ['./work-details-card.component.css'],
})
export class WorkDetailsCardComponent {
  workList: Work[] = list;

  constructor(private router:Router){}

  showDetails(item:Work) {
    this.router.navigate(['work/details'],{state:{data:item}})
  }
}
