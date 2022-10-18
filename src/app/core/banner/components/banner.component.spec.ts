import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BannerComponent} from './banner.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [BannerComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create status banner', () => {
    expect(component.statusBanner).toBe(true);
  });
});
