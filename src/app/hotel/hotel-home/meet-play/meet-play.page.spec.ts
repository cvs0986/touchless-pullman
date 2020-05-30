import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeetPlayPage } from './meet-play.page';

describe('MeetPlayPage', () => {
  let component: MeetPlayPage;
  let fixture: ComponentFixture<MeetPlayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetPlayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeetPlayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
