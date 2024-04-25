import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetailsModalComponent } from './products-details-modal.component';

describe('ProductsDetailsModalComponent', () => {
  let component: ProductsDetailsModalComponent;
  let fixture: ComponentFixture<ProductsDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsDetailsModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
