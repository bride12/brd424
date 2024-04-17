
import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { OverlayModule } from '@angular/cdk/overlay';
import {SearchOverlayComponent} from "../search-overlay/search-overlay.component";
import { NgClass } from '@angular/common';
import {SearchBarService} from "../../services/search-bar.service";
import { Router } from '@angular/router';
import {SearchResultsComponent} from "../../pages/search-results/search-results.component";



@Component({
  selector: 'app-search-bar',
  standalone: true,
  template: `
    <div
      class="search-bar-container"
      cdkOverlayOrigin
      #trigger="cdkOverlayOrigin"
      [ngClass]="{ 'opened mat-elevation-z2': overlayOpen() }"
    >
      <button mat-icon-button (click)="search(searchInput.value)">
        <mat-icon>search</mat-icon>
      </button>
      <input
        #searchInput
        placeholder="Search"
        [value]="searchBarService.searchTerm()"
        (keydown.ENTER)="search(searchInput.value)"
        (click)="overlayOpen.set(true)"
      />
      <!--@if(searchBarService.searchTerm()) {
      <button class="close-button" mat-icon-button (click)="clearSearch()">
        <mat-icon>close</mat-icon>
      </button>
      }-->
    </div>
    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayOrigin]="trigger"
      [cdkConnectedOverlayOpen]="overlayOpen()"
      [cdkConnectedOverlayDisableClose]="true"
      (overlayOutsideClick)="clickedOutside($event)"
    >
      <app-search-overlay />
    </ng-template>
  `,
  styles: `
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);

  :host {
    display: block;
  }

  .search-bar-container {
    padding: 0px 56px 0px 8px;
    background: #eaf1fb;
    border-radius: 32px;
    display: flex;
    align-items: center;
    position: relative;
    min-width: 468px;

    > input {
      font-size: 1.1rem;
      outline: none;
      border: none;
      background: inherit;
      min-width: 352px;
    }

    &.opened {
      background: white;
      border-radius: 32px 32px 0px 0px;
    }

    .close-button {
      position: absolute;
      top: 0;
      right: 8px;
    }
  }

  `,
  imports: [
    MatIconButton,
    MatIcon,
    OverlayModule,
    SearchOverlayComponent,
    NgClass,
    SearchResultsComponent
  ],
})
export class SearchBarComponent {
  searchBarService = inject(SearchBarService);
  overlayOpen = this.searchBarService.overlayOpen;
  router = inject(Router);

  searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');

  clickedOutside(event: MouseEvent) {
    if (this.searchInput()?.nativeElement != (event.target as HTMLElement)) {
      this.overlayOpen.set(false);
    }
  }

  clearSearch() {
    this.router.navigate(['/search']);
  }

  search(searchTerm: string) {
    if (!searchTerm) {
      return;
    }

    this.router.navigate([`/search/${searchTerm}`]);
  }
}
