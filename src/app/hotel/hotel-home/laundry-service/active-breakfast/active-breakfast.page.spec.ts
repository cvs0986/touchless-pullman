import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActiveBreakfastPage } from './active-breakfast.page';

describe('ActiveBreakfastPage', () => {
  let component: ActiveBreakfastPage;
  let fixture: ComponentFixture<ActiveBreakfastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveBreakfastPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActiveBreakfastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
