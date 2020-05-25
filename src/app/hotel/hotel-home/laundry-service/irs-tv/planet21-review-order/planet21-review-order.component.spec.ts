import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Planet21ReviewOrderComponent } from './planet21-review-order.component';

describe('Planet21ReviewOrderComponent', () => {
  let component: Planet21ReviewOrderComponent;
  let fixture: ComponentFixture<Planet21ReviewOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Planet21ReviewOrderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Planet21ReviewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
