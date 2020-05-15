import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JourneyExperiencePage } from './journey-experience.page';

describe('JourneyExperiencePage', () => {
  let component: JourneyExperiencePage;
  let fixture: ComponentFixture<JourneyExperiencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyExperiencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JourneyExperiencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
