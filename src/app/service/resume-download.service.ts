import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ResumeDownloadService {
  constructor(private http: HttpClient) {}

  downloadResume(): void {
    this.http
      .get('../../assets/documents/Vaniko-Nozadze-CV.pdf', {
        responseType: 'blob',
      })
      .subscribe((res: Blob) => {
        const url = window.URL.createObjectURL(res);
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.href = url;
        a.download = 'Vaniko-Nozadze-Resume.pdf';
        a.click();
        window.URL.revokeObjectURL(url);
      });
  }
}
