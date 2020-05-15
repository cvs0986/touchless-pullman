import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelHomePage } from './hotel-home.page';

describe('HotelHomePage', () => {
  let component: HotelHomePage;
  let fixture: ComponentFixture<HotelHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
