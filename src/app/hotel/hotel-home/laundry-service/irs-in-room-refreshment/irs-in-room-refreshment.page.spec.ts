import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IrsInRoomRefreshmentPage } from './irs-in-room-refreshment.page';

describe('IrsInRoomRefreshmentPage', () => {
  let component: IrsInRoomRefreshmentPage;
  let fixture: ComponentFixture<IrsInRoomRefreshmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrsInRoomRefreshmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IrsInRoomRefreshmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
