import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpaExplorePage } from './spa-explore.page';

describe('SpaExplorePage', () => {
  let component: SpaExplorePage;
  let fixture: ComponentFixture<SpaExplorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaExplorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpaExplorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
