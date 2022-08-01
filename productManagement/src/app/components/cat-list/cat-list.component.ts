import { Component, OnInit } from '@angular/core';
import { Productcategory } from 'src/app/common/productcategory';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {

  categories:Productcategory[];

  constructor(private service: ProductServiceService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }
  getAllCategories() {
    this.service.getAllCategory().subscribe(
      data=>{
        console.log(data);
        this.categories = data ;
      }
    )
  }

 
}
