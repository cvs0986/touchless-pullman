import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JourneyWellBeingPage } from './journey-well-being.page';

describe('JourneyWellBeingPage', () => {
  let component: JourneyWellBeingPage;
  let fixture: ComponentFixture<JourneyWellBeingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyWellBeingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JourneyWellBeingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
