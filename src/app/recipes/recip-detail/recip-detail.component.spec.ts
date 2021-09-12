import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipDtailsComponent } from './recip-dtails.component';

describe('RecipDtailsComponent', () => {
  let component: RecipDtailsComponent;
  let fixture: ComponentFixture<RecipDtailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipDtailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipDtailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
