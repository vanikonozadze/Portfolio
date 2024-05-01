import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private elementRef: ElementRef) {}

  ngOnInit(): void {}

  aboutMeFunction(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const sectionId = `${target.classList[0].slice(0, -2)}`;
    const element = document.getElementById(sectionId) as HTMLElement;

    console.log(sectionId);

    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
}
