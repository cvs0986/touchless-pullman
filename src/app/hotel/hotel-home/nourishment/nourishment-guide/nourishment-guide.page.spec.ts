import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NourishmentGuidePage } from './nourishment-guide.page';

describe('NourishmentGuidePage', () => {
  let component: NourishmentGuidePage;
  let fixture: ComponentFixture<NourishmentGuidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NourishmentGuidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NourishmentGuidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
