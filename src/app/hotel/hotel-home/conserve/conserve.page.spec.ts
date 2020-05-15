import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConservePage } from './conserve.page';

describe('ConservePage', () => {
  let component: ConservePage;
  let fixture: ComponentFixture<ConservePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConservePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConservePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
