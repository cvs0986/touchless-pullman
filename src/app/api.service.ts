import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'https://ird-api.valet2you.in/v10.0.6/guest/';

  constructor(private http: HttpClient) {}

  getMenus(id) {
    return this.http.get<any>(this.url + 'menu/' + id, {
      observe: 'response',
      responseType: 'json',
    });
  }

  getCategory(id) {
    return this.http.get<any>(this.url + 'menu_category/' + id, {
      observe: 'response',
      responseType: 'json',
    });
  }

  getMenusByCategory(id, categoryId) {
    return this.http.get<any>(
      this.url + 'menu/' + id + '?category=' + categoryId,
      {
        observe: 'response',
        responseType: 'json',
      }
    );
  }

  getMenusByType(id, type) {
    return this.http.get<any>(this.url + 'menu/' + id + '?type=' + type, {
      observe: 'response',
      responseType: 'json',
    });
  }

  getHotelType(id) {
    return this.http.get<any>(this.url + 'hotel_type/' + id, {
      observe: 'response',
      responseType: 'json',
    });
  }

  placeOrder(id, data) {
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin', '*');

    return this.http.post<any>(this.url + 'order/' + id, data, {
      observe: 'response',
      responseType: 'json',
      headers,
    });
  }
}
