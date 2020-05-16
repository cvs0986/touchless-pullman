import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JourneyConnectivityPage } from './journey-connectivity.page';

describe('JourneyConnectivityPage', () => {
  let component: JourneyConnectivityPage;
  let fixture: ComponentFixture<JourneyConnectivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyConnectivityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JourneyConnectivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
