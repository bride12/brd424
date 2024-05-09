import { Routes } from '@angular/router';
import { HomeComponent} from "./pages/home/home.component";
import { SearchResultsComponent } from "./pages/search-results/search-results.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'search/:searchTerm',
    component: SearchResultsComponent,
  },
  {
    path: 'search',
    component: SearchResultsComponent,
  },
];
