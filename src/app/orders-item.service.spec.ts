import { TestBed } from '@angular/core/testing';

import { OrdersItemService } from './orders-item.service';

describe('OrdersItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdersItemService = TestBed.get(OrdersItemService);
    expect(service).toBeTruthy();
  });
});
