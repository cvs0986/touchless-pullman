import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpaMenuPage } from './spa-menu.page';

describe('SpaMenuPage', () => {
  let component: SpaMenuPage;
  let fixture: ComponentFixture<SpaMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpaMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
