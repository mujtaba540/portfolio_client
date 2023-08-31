import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('contact') public structure !: ElementRef;
  
  naviagteToForm(){
    console.log(this.structure);
    this.structure.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });

  }
}
