import { Component } from '@angular/core';
import { FilterByBudgetComponent } from '../filter-by-budget/filter-by-budget.component';
import { FilterByRatingComponent } from '../filter-by-rating/filter-by-rating.component';

@Component({
  selector: 'app-sidebar-filters',
  standalone: true,
  imports: [FilterByBudgetComponent, FilterByRatingComponent],
  templateUrl: './sidebar-filters.component.html',
  styleUrl: './sidebar-filters.component.scss',
})
export class SidebarFiltersComponent {}
