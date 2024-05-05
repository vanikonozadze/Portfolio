import { Component, OnInit } from '@angular/core';
import { ResumeDownloadService } from 'src/app/service/resume-download.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'],
})
export class IntroductionComponent implements OnInit {
  constructor(private resumeDownloadService: ResumeDownloadService) {}

  ngOnInit(): void {}

  downloadResume(): void {
    this.resumeDownloadService.downloadResume();
  }
}
