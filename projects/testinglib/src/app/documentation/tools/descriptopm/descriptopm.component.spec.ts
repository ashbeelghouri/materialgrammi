import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptopmComponent } from './descriptopm.component';

describe('DescriptopmComponent', () => {
  let component: DescriptopmComponent;
  let fixture: ComponentFixture<DescriptopmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptopmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptopmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
