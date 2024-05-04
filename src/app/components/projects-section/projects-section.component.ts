import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css'],
})
export class ProjectsSectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    AOS.init();
  }
}
