import { Injectable } from '@angular/core';
import { Category } from '../utils/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryForm: Category;

  constructor() { }
}
