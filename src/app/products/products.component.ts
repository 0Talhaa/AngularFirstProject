import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'
@Component({
  selector: 'products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  MyPerfume:any[]=[{
    "id": 1,
    "name": "Dianel Desire",
    "price": 1500,
    "image": "./assets/images/perfume1.jpg",
    "description": "This is a description of the product",
    "rating": 4.5,
    "stoke":10,
    "qty":"50ml"
  },
  {
    "id": 2,
    "name": "White Oud",
    "price": 2000,
    "image": "./assets/images/perfume2.jpg",
    "description": "This is a description of the product",
    "rating": 5,
    "stoke":1,
    "qty":"50ml"
  },
  {
    "id": 3,
    "name": "Black Oud",
    "price":3500,
    "image": "./assets/images/perfume3.jpg",
    "description": "This is a description of the product",
    "rating": 3,
    "stoke":15,
    "qty":"50ml"
  },
  {
    "id": 1,
    "name": "Black Dark",
    "price": 1500,
    "image": "./assets/images/perfume4.jpg",
    "description": "This is a description of the product",
    "rating": 4.5,
    "stoke":10,
    "qty":"50ml"
  }]
}
