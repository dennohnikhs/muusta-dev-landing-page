import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNewCommentComponent } from './product-new-comment.component';

describe('ProductNewCommentComponent', () => {
  let component: ProductNewCommentComponent;
  let fixture: ComponentFixture<ProductNewCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductNewCommentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductNewCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
