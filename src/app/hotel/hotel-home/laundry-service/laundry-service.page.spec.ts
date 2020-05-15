import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaundryServicePage } from './laundry-service.page';

describe('LaundryServicePage', () => {
  let component: LaundryServicePage;
  let fixture: ComponentFixture<LaundryServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaundryServicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaundryServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
