import { Injectable } from '@angular/core';
import { Product } from '../utils/product.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productForm: Product;
  product_form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(0),
    stock: new FormControl(true),
    category: new FormControl(0),
    rating: new FormControl(''),
    image: new FormControl(''),
  });

  constructor(
    public afstore: AngularFirestore,
    public afstorage: AngularFireStorage,
    public toast: ToastrService
  ) { }
  AddProduct(data) {
    this.afstore.collection('/products')
      .add(data)
      .then((value) => console.log("Data Added"))
      .catch((error) => alert(error));
    this.toast.success("Succefully", "Product Added");
  }

  DeleteProduct(data) {
    this.afstore.collection('products')
      .doc(data)
      .delete()
      .then((value) => console.log("Data Added"))
      .catch((error) => alert(error));;
  }

  updateProduct(data,id) {
    this.afstore.collection('products')
      .doc(id)
      .update(data)
      .then((value) => this.toast.success("Updated Successfully", "Success"))
      .catch((error) => this.toast.error(error, "Failed!"));
  }
  getProductData() {
    return this.afstore.collection('products').snapshotChanges();
  }
}
