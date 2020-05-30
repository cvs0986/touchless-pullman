import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IrsInRoomEssentialsPage } from './irs-in-room-essentials.page';

describe('IrsInRoomEssentialsPage', () => {
  let component: IrsInRoomEssentialsPage;
  let fixture: ComponentFixture<IrsInRoomEssentialsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrsInRoomEssentialsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IrsInRoomEssentialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
