import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
// register Swiper custom elements
register();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    IntroductionComponent,
    AboutMeComponent,
    ProjectsSectionComponent,
    ContactMeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
