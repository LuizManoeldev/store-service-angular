import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {HeaderService} from "../../components/template/header/header.service";

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.HeaderData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }
  ngOnInit(){

  }

  navegateToProductCreate(){
    this.router.navigate(['/products/create'])
  }
}
