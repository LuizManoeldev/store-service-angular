import { Component } from '@angular/core';
import {ProductService} from "../product.service";
import {Router} from "@angular/router"
import {Product} from "../product.model";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  product: Product = {
    name: '',
    price: 0
  }
  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit() {}
  createProduct(){
    //aqui ele vai receber os campos do product
    // criar o objeto product
    // e passasr esses object para o service

    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto Criado!")
      this.router.navigate(['/products'])

    })
  }

  cancel(){
    this.router.navigate(['/products'])
  }
}
