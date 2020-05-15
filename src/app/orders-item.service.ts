import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersItemService {
  ordersItems: any = [];
  hotelId = '';
  placedOrder: any[] = [];
  constructor() { }
}
