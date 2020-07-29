import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/pages/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categoryOptions = [
    {id: 1, value: 'Computer Accessories' },
    {id: 2, value: 'Mobile Accessories' },
    {id: 3, value: 'Toys'},
    {id: 4, value: 'Garments' },
    {id: 5, value: 'Cosmetics' },
  ];


  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }
  upd

}
