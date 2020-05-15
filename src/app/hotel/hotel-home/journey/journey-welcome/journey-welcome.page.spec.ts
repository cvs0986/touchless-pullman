import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JourneyWelcomePage } from './journey-welcome.page';

describe('JourneyWelcomePage', () => {
  let component: JourneyWelcomePage;
  let fixture: ComponentFixture<JourneyWelcomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyWelcomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JourneyWelcomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
