import { Component } from '@angular/core';
import { ProductCommentComponent } from '../product-comment/product-comment.component';
import { ProductNewCommentComponent } from '../product-new-comment/product-new-comment.component';

@Component({
  selector: 'app-product-comments',
  standalone: true,
  imports: [ProductCommentComponent, ProductNewCommentComponent],
  templateUrl: './product-comments.component.html',
  styleUrl: './product-comments.component.scss',
})
export class ProductCommentsComponent {}
