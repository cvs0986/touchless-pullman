import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoToComponent } from './go-to.component';

describe('GoToComponent', () => {
  let component: GoToComponent;
  let fixture: ComponentFixture<GoToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoToComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
