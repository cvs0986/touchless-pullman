import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpaEtiqPage } from './spa-etiq.page';

describe('SpaEtiqPage', () => {
  let component: SpaEtiqPage;
  let fixture: ComponentFixture<SpaEtiqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaEtiqPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpaEtiqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
