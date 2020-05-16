import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IrsPillowPage } from './irs-pillow.page';

describe('IrsPillowPage', () => {
  let component: IrsPillowPage;
  let fixture: ComponentFixture<IrsPillowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrsPillowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IrsPillowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
