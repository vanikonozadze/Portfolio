import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
