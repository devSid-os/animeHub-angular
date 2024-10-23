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
import { MatChipsModule } from "@angular/material/chips";
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { AnimeOverviewComponent } from './anime-detail/anime-overview/anime-overview.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AnimeSectionComponent,
    AnimeAsideComponent,
    AnimeDetailComponent,
    AnimeOverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
