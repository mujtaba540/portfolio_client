import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-gallery',
  templateUrl: './work-gallery.component.html',
  styleUrls: ['./work-gallery.component.css']
})
export class WorkGalleryComponent {
  @Input() item!:string[]
}
