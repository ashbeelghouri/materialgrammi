import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsIntroductionComponent } from './gs-introduction.component';

describe('GsIntroductionComponent', () => {
  let component: GsIntroductionComponent;
  let fixture: ComponentFixture<GsIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsIntroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
