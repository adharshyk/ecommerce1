import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';
import { Productcategory } from '../common/productcategory';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private produrl = "http://localhost:8080/api/prod";
  private caturl = "http://localhost:8080/api/cat";

  constructor(private httpClient: HttpClient) { }
  getAllProduct(): Observable<Product[]> {
    console.log(this.httpClient.get<getProductresponse>(this.produrl).pipe(map(response => response._embedded.products)));
    return this.httpClient.get<getProductresponse>(this.produrl).pipe(map(response => response._embedded.products));
  }
  getAllCategory(): Observable<Productcategory[]> {
    console.log(this.httpClient.get<getCategoryResponse>(this.caturl).pipe(map(response => response._embedded.categories)));
    return this.httpClient.get<getCategoryResponse>(this.caturl).pipe(map(response => response._embedded.categories));
  }

  // saveProduct(product: Product): Observable<Product> {
  //   console.log(product)

  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json',
  //       'Authorization': 'auth-token',
  //       'Access-Control-Allow-Origin': '*'
  //     })


  //   }
  //   return this.httpClient.post<Product>(this.produrl, product, httpOptions);
  // }

  saveProduct(products:Product):Observable<Product>{

    console.log(products)

    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type' :'application/json',
      'Authorization':'auth-token',
      'Access-Control-Allow-Origin':'*'
    })
  }
  
  return this.httpClient.post<Product>(this.produrl,products,httpOptions)

 
  }
}



interface getProductresponse {
  _embedded: {
    products: Product[]
  }
}

interface getCategoryResponse {
  _embedded: {
    categories: Productcategory[]
  }
}
