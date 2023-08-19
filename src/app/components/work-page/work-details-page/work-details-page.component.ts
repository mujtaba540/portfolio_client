import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Work } from 'src/app/interfaces/word.interface';

@Component({
  selector: 'app-work-details-page',
  templateUrl: './work-details-page.component.html',
  styleUrls: ['./work-details-page.component.css']
})
export class WorkDetailsPageComponent {
  item!:Work;
  constructor(private activatedRoute:ActivatedRoute){
    this.activatedRoute.paramMap.subscribe({
      next:data=>{
        this.item =history.state.data
      }
    })
  }
    
  responsiveOptions!: {breakpoint:string,numVisible:number}[];
  
}
