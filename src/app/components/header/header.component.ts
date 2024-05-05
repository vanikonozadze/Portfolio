import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  aboutMeFunction(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const sectionId = `${target.classList[0].slice(0, -2)}`;
    const element = document.getElementById(sectionId) as HTMLElement;

    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
}
