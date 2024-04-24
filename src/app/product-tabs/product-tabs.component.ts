import { Component } from "@angular/core";
import { ProductFilterComponent } from "../product-filter/product-filter.component";
import { ProductInventoryComponent } from "../product-inventory/product-inventory.component";
@Component({
  selector: "app-product-tabs",
  standalone: true,
  imports: [ProductFilterComponent, ProductInventoryComponent],
  templateUrl: "./product-tabs.component.html",
  styleUrl: "./product-tabs.component.scss",
})
export class ProductTabsComponent {}
