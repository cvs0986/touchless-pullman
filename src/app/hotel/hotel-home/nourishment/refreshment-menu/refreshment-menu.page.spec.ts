import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RefreshmentMenuPage } from './refreshment-menu.page';

describe('RefreshmentMenuPage', () => {
  let component: RefreshmentMenuPage;
  let fixture: ComponentFixture<RefreshmentMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshmentMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RefreshmentMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
