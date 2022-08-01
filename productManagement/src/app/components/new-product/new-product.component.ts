import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { Productcategory } from 'src/app/common/productcategory';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { CatListComponent } from '../cat-list/cat-list.component';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  categories: Productcategory[]
  product: Product = new Product(0, "", "", "", 0, "", 0, 0, new Date(), new Date(), 0);
  constructor(private service: ProductServiceService, private route: Router) { }

  ngOnInit(): void {
    this.getAllCategories()
  }
  getAllCategories() {
    this.service.getAllCategory().subscribe(
      data => {
        console.log(data);
        this.categories = data;
      }
    )
  }
  onSubmit() {
    // console.log(this.product);
    // this.service.saveProduct(this.product);
   
    this.service.saveProduct(this.product).subscribe(() => {
      this.route.navigateByUrl("/prod")
    })

  }
}
