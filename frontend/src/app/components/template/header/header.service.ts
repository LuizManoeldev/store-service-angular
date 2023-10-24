import { Injectable } from '@angular/core';
import {HeaderData} from "./header-data.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData =  new BehaviorSubject<HeaderData>({
    title: 'Inicio',
    icon: 'home',
    routeUrl:''
  })
  constructor() { }

  get HeaderData(): HeaderData {
    return this._headerData.value;
  }

  set HeaderData(headerData: HeaderData) {
    this._headerData.next(headerData)
  }
}
