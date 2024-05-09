import { Component, Input, inject } from '@angular/core';
import {SearchBarService} from "../../services/search-bar.service";

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [],
  template: `
    <!--@if(currentSearchTerm()) {
    <h1>Search results for '{{ currentSearchTerm() }}'</h1>
    } @else {
    <p>Please enter a search term above.</p>
    }-->
  `,
  styles: ``,
})
export class SearchResultsComponent {
  @Input() set searchTerm(val: string) {
    this.searchBarService.search(val);
  }

  searchBarService = inject(SearchBarService);

  currentSearchTerm = this.searchBarService.searchTerm;
}
