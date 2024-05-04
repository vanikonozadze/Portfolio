import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
})
export class ContactMeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
