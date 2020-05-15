import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CovidInfoPage } from './covid-info.page';

describe('CovidInfoPage', () => {
  let component: CovidInfoPage;
  let fixture: ComponentFixture<CovidInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CovidInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
