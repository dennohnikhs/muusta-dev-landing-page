import { Component } from '@angular/core';
import { ProductCategoryComponent } from '../product-category/product-category.component';

@Component({
  selector: 'app-product-categories',
  standalone: true,
  imports: [ProductCategoryComponent],
  templateUrl: './product-categories.component.html',
  styleUrl: './product-categories.component.scss',
})
export class ProductCategoriesComponent {}
