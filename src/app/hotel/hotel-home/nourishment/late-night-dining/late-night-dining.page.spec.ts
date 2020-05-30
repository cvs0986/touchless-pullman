import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LateNightDiningPage } from './late-night-dining.page';

describe('LateNightDiningPage', () => {
  let component: LateNightDiningPage;
  let fixture: ComponentFixture<LateNightDiningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LateNightDiningPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LateNightDiningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
