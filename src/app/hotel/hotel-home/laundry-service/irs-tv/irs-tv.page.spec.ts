import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IrsTvPage } from './irs-tv.page';

describe('IrsTvPage', () => {
  let component: IrsTvPage;
  let fixture: ComponentFixture<IrsTvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrsTvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IrsTvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
