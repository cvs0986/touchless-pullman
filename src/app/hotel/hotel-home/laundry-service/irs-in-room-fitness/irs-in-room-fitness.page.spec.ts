import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IrsInRoomFitnessPage } from './irs-in-room-fitness.page';

describe('IrsInRoomFitnessPage', () => {
  let component: IrsInRoomFitnessPage;
  let fixture: ComponentFixture<IrsInRoomFitnessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrsInRoomFitnessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IrsInRoomFitnessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
