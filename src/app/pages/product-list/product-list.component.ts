import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductFormComponent } from '../forms/product-form/product-form.component';
import { ProductService } from '../services/product.service';
import { Product } from '../utils/product.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  list: Product[];
  data: Product;
  categoryOptions = [
    { id: 1, value: 'Accessories' },
    { id: 2, value: 'Mobile Accessories' },
    { id: 3, value: 'Toys' },
    { id: 4, value: 'Garments' },
    { id: 5, value: 'Cosmetics' },
  ];
  constructor(public productService: ProductService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.productService.getProductData().subscribe(response => {
      this.list = response.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() as Product
        };
      })
    });
    console.log(this.list);
  }


  removeProduct(data: string) {
    // console.log("Data Delete");
    // console.log(data);
    this.productService.DeleteProduct(data);
  }

  updateProduct(formData: any) {
    this.productService.product_form.setValue({
      id: formData.id,
      name: formData.name,
      description: formData.description,
      price: formData.price,
      stock: formData.stock,
      category: formData.category,
      rating:  formData.ratings,
      image: formData.imageURL,
    });
  }

  AddProduct(dataValues: any): void {
    console.log("add product", dataValues.value)
    this.productService.AddProduct(dataValues.value);
  }

  UpdateProduct(){
    let data = this.productService.product_form.value;
    this.productService.updateProduct({
      name: data.name,
      description: data.description,
      price: data.price,
      stock: data.stock,
      category: data.category,
      ratings:  data.rating,
      imageURL: data.image,
    },data.id);
    console.log(data);
  }
}
