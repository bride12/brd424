
import { Injectable, effect, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SearchBarService {
  public readonly overlayOpen = signal(false);

  public readonly recentSearches = signal<string[]>(
    ["Room Service", "Local Map", "Things to do in Toronto", "Excursions (Coming Soon!)", "Locations (Coming Soon!)"]);
    /*JSON.parse(window.localStorage.getItem('recentSearches') ?? '[]')
  );*/

  public readonly searchTerm = signal('');

  router = inject(Router);

  search(searchTerm: string) {
    if (!searchTerm) {
      this.clearSearch();
      return;
    }

    this.searchTerm.set(searchTerm);
    this.overlayOpen.set(false);
    this.addToRecentSearches(searchTerm);
  }

  clearSearch() {
    this.searchTerm.set('');
    this.overlayOpen.set(true);
  }

  deleteRecentSearch(searchTerm: string) {
    this.recentSearches.set(
      this.recentSearches().filter((s) => s !== searchTerm)
    );
  }

  addToRecentSearches(searchTerm: string) {
    const termInLowerCase = searchTerm.toLowerCase();
    this.recentSearches.set([
      termInLowerCase,
      ...this.recentSearches().filter((s) => s !== termInLowerCase),
    ]);
  }

  saveLocalStorage = effect(() => {
    window.localStorage.setItem(
      'recentSearches',
      JSON.stringify(this.recentSearches())
    );
  });
}
