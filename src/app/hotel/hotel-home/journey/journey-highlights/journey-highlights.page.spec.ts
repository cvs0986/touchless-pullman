import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JourneyHighlightsPage } from './journey-highlights.page';

describe('JourneyHighlightsPage', () => {
  let component: JourneyHighlightsPage;
  let fixture: ComponentFixture<JourneyHighlightsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyHighlightsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JourneyHighlightsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
