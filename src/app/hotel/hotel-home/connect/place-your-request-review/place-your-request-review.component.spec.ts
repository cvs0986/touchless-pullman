import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlaceYourRequestReviewComponent } from './place-your-request-review.component';

describe('PlaceYourRequestReviewComponent', () => {
  let component: PlaceYourRequestReviewComponent;
  let fixture: ComponentFixture<PlaceYourRequestReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceYourRequestReviewComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceYourRequestReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
