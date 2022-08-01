import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {

  products : Product[]
  constructor(private service:ProductServiceService) { }

  ngOnInit(): void {
    this.listOfProducts() ;
  }

  listOfProducts(){
    this.service.getAllProduct().subscribe(data=>{
      console.log(data)
      this.products = data ;
    }) ;
  }
}
