import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IrdMenuPage } from './ird-menu.page';

describe('IrdMenuPage', () => {
  let component: IrdMenuPage;
  let fixture: ComponentFixture<IrdMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrdMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IrdMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
