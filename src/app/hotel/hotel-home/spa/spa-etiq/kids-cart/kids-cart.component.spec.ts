import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KidsCartComponent } from './kids-cart.component';

describe('KidsCartComponent', () => {
  let component: KidsCartComponent;
  let fixture: ComponentFixture<KidsCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsCartComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KidsCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
