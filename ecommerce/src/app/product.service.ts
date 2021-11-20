import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl="http://localhost:8080/";
  constructor(private http: HttpClient) { }

  getProducts():Observable<any>
  {
    return this.http.get(`${this.baseUrl+"getProducts"}`);
  }

  getProdsFromCatId(catId):Observable<any>
  {
      return this.http.get(`${this.baseUrl}/getProductByCat/${catId}`);
  }

  getProdsFromProdId(prodId):Observable<any>
  {
      return this.http.get(`${this.baseUrl}/getProduct/${prodId}`);
  }

}
