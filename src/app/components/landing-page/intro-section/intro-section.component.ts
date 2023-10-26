import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.css'],
})
export class IntroSectionComponent {
  isLoading!: boolean;
  constructor(private http: HttpClient) {}

  downloadCV() {
    this.isLoading = true;
    const fileUrl = 'assets/pdf/Muhammad-Mujtaba-CV.pdf';
    this.http
      .get(fileUrl, { responseType: 'blob' })
      .subscribe((response: Blob) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        saveAs(blob, 'Muhammad-Mujtaba-resume.pdf');
        this.isLoading = false;
      });
  }
}
