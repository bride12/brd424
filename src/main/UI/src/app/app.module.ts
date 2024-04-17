import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {MatIcon} from "@angular/material/icon";
import {RouterOutlet} from "@angular/router";
import {SearchOverlayComponent} from "./components/search-overlay/search-overlay.component";
import {OverlayModule} from "@angular/cdk/overlay";
import {HomeComponent} from "./pages/home/home.component";
import {SearchResultsComponent} from "./pages/search-results/search-results.component";




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterOutlet,
    MatToolbar,
    MatIconButton,
    MatIcon,
    SearchBarComponent,
    HomeComponent,
    SearchResultsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
