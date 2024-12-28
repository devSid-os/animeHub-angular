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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from "@angular/material/tooltip";
import { LoaderModule } from './loader/loader.module';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AnimeSectionComponent,
    AnimeAsideComponent,
    HomeCarouselComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    LoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
