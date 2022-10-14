import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategotyIconComponent } from './categoty-icon.component';

describe('CategotyIconComponent', () => {
  let component: CategotyIconComponent;
  let fixture: ComponentFixture<CategotyIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategotyIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategotyIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
