import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JourneyServicePage } from './journey-service.page';

describe('JourneyServicePage', () => {
  let component: JourneyServicePage;
  let fixture: ComponentFixture<JourneyServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyServicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JourneyServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
