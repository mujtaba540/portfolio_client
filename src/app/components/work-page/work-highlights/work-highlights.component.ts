import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-highlights',
  templateUrl: './work-highlights.component.html',
  styleUrls: ['./work-highlights.component.css']
})
export class WorkHighlightsComponent {
  @Input() item!:{key:string,value:string}[]
}
