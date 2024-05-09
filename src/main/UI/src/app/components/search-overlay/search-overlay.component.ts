import { Component, computed, inject } from '@angular/core';
import { SearchBarService } from "../../services/search-bar.service";
import { MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import { MatIconButton } from '@angular/material/button';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-search-overlay',
  standalone: true,
  imports: [MatListModule, MatIcon, MatDivider, MatIconButton, RouterModule],
  template: `<div class="overlay-container mat-elevation-z2">
    <mat-divider />
    <mat-action-list [disableRipple]="true">
      @for (search of recentSearches(); track $index) {
      <mat-list-item routerLink="/search/{{ search }}">
        <mat-icon matListItemIcon>history</mat-icon>
        <h3 matListItemTitle>{{ search }}</h3>
        <button
          matListItemMeta
          mat-icon-button
          (click)="deleteSearch(search, $event)"
        >
          <mat-icon>close</mat-icon>
        </button>
      </mat-list-item>
      }
    </mat-action-list>
  </div>`,
  styles: `
  @import "https://fonts.googleapis.com/icon?family=Material+Icons";

  :host {
    display: block;
  }

  .overlay-container {
    border-radius: 0px 0px 32px 32px;
    min-width: 468px;
    background: white;
    padding-bottom: 16px;
  }


  `,
})
export class SearchOverlayComponent {
  searchBarService = inject(SearchBarService);
  recentSearches = computed(() =>
    this.searchBarService.recentSearches().slice(0, 5)
  );

  deleteSearch(searchTerm: string, event: MouseEvent) {
    event.stopPropagation();
    this.searchBarService.deleteRecentSearch(searchTerm);
  }
}
