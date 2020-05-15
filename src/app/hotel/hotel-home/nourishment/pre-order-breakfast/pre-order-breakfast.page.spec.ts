import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreOrderBreakfastPage } from './pre-order-breakfast.page';

describe('PreOrderBreakfastPage', () => {
  let component: PreOrderBreakfastPage;
  let fixture: ComponentFixture<PreOrderBreakfastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreOrderBreakfastPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreOrderBreakfastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
