import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TvGuidePage } from './tv-guide.page';

describe('TvGuidePage', () => {
  let component: TvGuidePage;
  let fixture: ComponentFixture<TvGuidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvGuidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TvGuidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
