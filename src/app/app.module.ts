import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home-component/home.component';
import { HttpClientModule } from "@angular/common/http"
import { CommonModule } from '@angular/common';
import { AnimeSectionComponent } from './home-component/anime-section/anime-section.component';
import { AnimeAsideComponent } from './home-component/anime-aside/anime-aside.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AnimeSectionComponent,
    AnimeAsideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
