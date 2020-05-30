import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelApiService {
  url = 'https://vserve-api.valet2you.in/api/v1/ird/guest/';
  minibarUrl = 'https://vserve-api.valet2you.in/api/v1/ird/mini-bar/guest/';
  laundryUrl = 'https://vserve-api.valet2you.in/api/v1/wash/laundry/guest/';
  spaUrl = 'https://vserve-api.valet2you.in/api/v1/sanitarium/spa/guest/';
  requestServiceUrl = 'https://vserve-api.valet2you.in/api/v1/connect/guest/';

  constructor(
    private http: HttpClient
  ) { }

  getMenus(id) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    return this.http.get<any>(this.url + 'menu/' + id, {
      observe: 'response',
      responseType: 'json',
      headers,
    });
  }

  getMinibarMenus(id) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    return this.http.get<any>(this.minibarUrl + 'menu/' + id, {
      observe: 'response',
      responseType: 'json',
      headers,
    });
  }

  getLaundryMenus(id) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    return this.http.get<any>(this.laundryUrl + 'menu/' + id, {
      observe: 'response',
      responseType: 'json',
      headers,
    });
  }

  getSpaMenus(id) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    return this.http.get<any>(this.spaUrl + 'menu/' + id, {
      observe: 'response',
      responseType: 'json',
      headers,
    });
  }

  getRequestServicesMenus(id) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    return this.http.get<any>(this.requestServiceUrl + 'menu/' + id, {
      observe: 'response',
      responseType: 'json',
      headers,
    });
  }

  placeOrder(data) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });

    return this.http.post<any>(this.url + 'order/', data, {
      observe: 'response',
      responseType: 'json',
      headers,
    });
  }
}
