import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JourneyPublicAreaPage } from './journey-public-area.page';

describe('JourneyPublicAreaPage', () => {
  let component: JourneyPublicAreaPage;
  let fixture: ComponentFixture<JourneyPublicAreaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyPublicAreaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JourneyPublicAreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
