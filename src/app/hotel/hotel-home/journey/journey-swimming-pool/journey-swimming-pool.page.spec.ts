import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JourneySwimmingPoolPage } from './journey-swimming-pool.page';

describe('JourneySwimmingPoolPage', () => {
  let component: JourneySwimmingPoolPage;
  let fixture: ComponentFixture<JourneySwimmingPoolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneySwimmingPoolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JourneySwimmingPoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
