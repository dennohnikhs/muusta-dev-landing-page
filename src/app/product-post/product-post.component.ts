import { Component } from '@angular/core';
import { ProductSliderComponent } from '../product-slider/product-slider.component';
import { ProductActionsComponent } from '../product-actions/product-actions.component';
import { ProductPostTopComponent } from '../product-post-top/product-post-top.component';
import { ProductCommentsComponent } from '../product-comments/product-comments.component';

@Component({
  selector: 'app-product-post',
  standalone: true,
  imports: [
    ProductSliderComponent,
    ProductActionsComponent,
    ProductPostTopComponent,
    ProductCommentsComponent,
  ],
  templateUrl: './product-post.component.html',
  styleUrl: './product-post.component.scss',
})
export class ProductPostComponent {}
