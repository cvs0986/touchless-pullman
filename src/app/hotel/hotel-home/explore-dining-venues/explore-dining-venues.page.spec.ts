import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreDiningVenuesPage } from './explore-dining-venues.page';

describe('ExploreDiningVenuesPage', () => {
  let component: ExploreDiningVenuesPage;
  let fixture: ComponentFixture<ExploreDiningVenuesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreDiningVenuesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreDiningVenuesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
