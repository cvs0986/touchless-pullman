import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NourishmentPage } from './nourishment.page';

describe('NourishmentPage', () => {
  let component: NourishmentPage;
  let fixture: ComponentFixture<NourishmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NourishmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NourishmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
