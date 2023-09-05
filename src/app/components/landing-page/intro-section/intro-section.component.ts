import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.css']
})
export class IntroSectionComponent {
  constructor(private http:HttpClient){}
  
  downloadCV(){
    const fileUrl = 'assets/pdf/Mujtaba-CV.pdf'; // Replace with the actual file name and extension
    this.http.get(fileUrl, { responseType: 'blob' }).subscribe((response: Blob) => {
      const blob = new Blob([response], { type: 'application/pdf' });
      saveAs(blob, 'Mujtaba-CV.pdf'); // Specify the desired PDF file name
    });

  }
}
