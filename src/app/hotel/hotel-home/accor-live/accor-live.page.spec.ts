import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccorLivePage } from './accor-live.page';

describe('AccorLivePage', () => {
  let component: AccorLivePage;
  let fixture: ComponentFixture<AccorLivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccorLivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccorLivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
