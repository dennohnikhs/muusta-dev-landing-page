import { Component } from "@angular/core";
import { ProductsDetailsModalComponent } from "../products-details-modal/products-details-modal.component";

@Component({
  selector: "app-product-inventory-info",
  standalone: true,
  imports: [ProductsDetailsModalComponent],
  templateUrl: "./product-inventory-info.component.html",
  styleUrl: "./product-inventory-info.component.scss",
})
export class ProductInventoryInfoComponent {}
