import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../Models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {}

  // ERROR HANDLING FOUND BELOW
  // ERROR HANDLING FOUND BELOW
  // ERROR HANDLING FOUND BELOW

  // POST METHOD
  createProduct(products: [name: string, description: string, price: string]) {
    const headers = new HttpHeaders({ myHeader: 'AngularDirectory' });
    this.http
      .post<{ name: string }>(
        'https://angulardirectory-d75ad-default-rtdb.firebaseio.com/products.json',
        products,
        { headers: headers }
      )
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          this.error.next(err.message);
        }
      );
  }

  // GET METHOD
  fetchProduct() {
    const header = new HttpHeaders() // imutable
      .set('content-type', 'application/json')
      .set('Access-Contol-Allow-Origin', '*');

    // using pretty allows the response to show formated by adding the query parm
    const params = new HttpParams().set('print', 'pretty').set('pageNum', '1');
    return this.http
      .get<{ [key: string]: Product }>(
        'https://angulardirectory-d75ad-default-rtdb.firebaseio.com/products.json',
        { headers: header, params: params } // using pretty allows the response to show formated by adding the query parm
      )
      .pipe(
        map((res) => {
          const products = [];
          for (const key in res)
            if (res.hasOwnProperty(key)) {
              products.push({ ...res[key], id: key });
            }
          return products;
        }),
        catchError((err) => {
          // write logic for loggin error in database
          return throwError(err);
        })
      );
  }

  // DELETE METHOD
  deleteProduct(id: any) {
    let header = new HttpHeaders();
    header = header.append('myHeader1', 'value1');
    header = header.append('myHeader2', 'value2');
    this.http
      .delete(
        'https://angulardirectory-d75ad-default-rtdb.firebaseio.com/products/' +
          id +
          '.json',
        { headers: header }
      )
      .subscribe();
  }

  deleteAllProduct() {
    this.http
      .delete(
        'https://angulardirectory-d75ad-default-rtdb.firebaseio.com/products.json'
      )
      .subscribe();
  }

  // PUT METHOD

  // Try to assign value to Product. Currently setting to "any" because an error is occuring.
  updateProduct(id: string, value: any) {
    this.http
      .put(
        'https://angulardirectory-d75ad-default-rtdb.firebaseio.com/products/' +
          id +
          '.json',
        value
      )
      .subscribe();
  }
}
