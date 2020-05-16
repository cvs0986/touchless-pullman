import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IrsLaundryPage } from './irs-laundry.page';

describe('IrsLaundryPage', () => {
  let component: IrsLaundryPage;
  let fixture: ComponentFixture<IrsLaundryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrsLaundryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IrsLaundryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
