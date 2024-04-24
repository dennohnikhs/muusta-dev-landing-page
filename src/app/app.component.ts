import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { ProductCategoriesComponent } from "./product-categories/product-categories.component";
import { SidebarFiltersComponent } from "./products-sidebar/sidebar-filters.component";
import { ProductPostComponent } from "./product-post/product-post.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ProductCategoriesComponent,
    SidebarFiltersComponent,
    ProductPostComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "ecommerce-app";
}
