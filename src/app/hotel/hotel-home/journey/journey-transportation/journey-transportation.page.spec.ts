import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JourneyTransportationPage } from './journey-transportation.page';

describe('JourneyTransportationPage', () => {
  let component: JourneyTransportationPage;
  let fixture: ComponentFixture<JourneyTransportationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyTransportationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JourneyTransportationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
