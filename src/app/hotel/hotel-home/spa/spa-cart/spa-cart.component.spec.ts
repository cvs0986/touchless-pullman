import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpaCartComponent } from './spa-cart.component';

describe('SpaCartComponent', () => {
  let component: SpaCartComponent;
  let fixture: ComponentFixture<SpaCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaCartComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpaCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
