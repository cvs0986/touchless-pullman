import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JourneyPoiPage } from './journey-poi.page';

describe('JourneyPoiPage', () => {
  let component: JourneyPoiPage;
  let fixture: ComponentFixture<JourneyPoiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyPoiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JourneyPoiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
