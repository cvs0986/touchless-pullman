import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettleBillCovidComponent } from './settle-bill-covid.component';

describe('SettleBillCovidComponent', () => {
  let component: SettleBillCovidComponent;
  let fixture: ComponentFixture<SettleBillCovidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettleBillCovidComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettleBillCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
