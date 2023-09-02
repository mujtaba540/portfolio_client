import { Component, Input } from '@angular/core';
import { Work } from 'src/app/interfaces/work.interface';

@Component({
  selector: 'app-work-description',
  templateUrl: './work-description.component.html',
  styleUrls: ['./work-description.component.css']
})
export class WorkDescriptionComponent {
  @Input() item!:Work
}
