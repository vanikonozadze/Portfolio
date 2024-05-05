import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
})
export class ContactMeComponent implements OnInit {
  form: FormGroup = this.fb.group({
    from_email: '',
    subject: '',
    message: '',
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    AOS.init();
  }

  async send() {
    emailjs.init('kLtsQLPvwAtqgoR_w');
    let response = await emailjs.send('service_6n2943l', 'template_9yujrls', {
      subject: this.form.value.subject,
      message: this.form.value.message,
      from_email: this.form.value.from_email,
    });

    alert('Message sent');
    this.form.reset();
  }
}

/* 
emailjs.send("service_6n2943l","template_9yujrls",{
subject: "TEST",
message: "Test message",
from_email: "ivane.nozadze.1@btu.edu.ge",
});
*/
