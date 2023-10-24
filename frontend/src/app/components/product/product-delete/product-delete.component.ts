import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../product.service";
import {Product} from "../product.model";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {
  product: Product = {
    name: '',
    price: 0
  }

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.productService.readById(id).subscribe(product => {
      this.product = product;
    })
  }

  deleteProduct(){
    this.productService.delete(this.product).subscribe(product => {
      this.productService.showMessage("Produto excluido com sucesso")
      this.router.navigate(['/products'])
    })

  }

  cancel(){
    this.router.navigate(['/products']);
  }

}
