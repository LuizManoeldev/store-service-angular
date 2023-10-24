import { Component } from '@angular/core';
import {HeaderService} from "./header.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private headerService: HeaderService) {
  }

  //Metodos get sendo usados como atributos
  get title() : string {
    return this.headerService.HeaderData.title
  }

  get icon() : string {
    return this.headerService.HeaderData.icon
  }

  get routeUrl() : string {
    return this.headerService.HeaderData.routeUrl
  }
}
