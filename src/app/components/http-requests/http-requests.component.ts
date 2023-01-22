import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/Models/products';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-http-requests',
  templateUrl: './http-requests.component.html',
  styleUrls: ['./http-requests.component.css'],
})
export class HttpRequestsComponent implements OnInit {
  constructor(private productService: ProductService) {}
  // Public Variables
  public allProducts: Product[] = [];
  public isFetching: boolean = false;
  public editMode: boolean = false;
  public currentProductId!: string;
  public errorMsg: any = null;
  public errorSub!: Subscription;

  @ViewChild('productsForm') form!: NgForm;

  // Public Methods
  public onProductCreate(
    products: [name: string, description: string, price: string]
  ) {
    if (!this.editMode) {
      this.productService.createProduct(products);
    } else {
      this.productService.updateProduct(this.currentProductId, products);
    }
  }

  //private methods

  private fetchProducts() {
    this.isFetching = true;
    this.productService.fetchProduct().subscribe(
      (products) => {
        this.allProducts = products;
        this.isFetching = false;
      },
      (err) => {
        this.errorMsg = err.message;
      }
    );
  }

  public onDeleteProduct(id: any) {
    this.productService.deleteProduct(id);
  }

  public onDeleteAllProduct() {
    this.productService.deleteAllProduct();
  }
  // NG Methods

  ngOnInit() {
    this.fetchProducts();
    this.productService.error.subscribe((message) => {
      this.errorMsg = message;
    });
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }

  public onProductsFetch() {
    this.fetchProducts();
  }

  public editProduct(id: any) {
    // get the product based on id
    // We are using ViewChild because this is a template driven form
    this.currentProductId = id;
    let currentProduct = this.allProducts.find((p) => {
      return p.id === id;
    });

    // popilate the form with the product details
    this.form.setValue({
      pName: currentProduct?.pName,
      desc: currentProduct?.desc,
      price: currentProduct?.price,
    });
    this.editMode = true;
  }
}
