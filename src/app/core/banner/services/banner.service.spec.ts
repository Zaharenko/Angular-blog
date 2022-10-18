import {TestBed} from '@angular/core/testing';

import {BannerService} from './banner.service';

describe('BannerService', () => {
  let service: BannerService;
  let alert;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannerService);
    service.banner$.subscribe((a) => {
      alert = a;
    });
  });

  it('should type: warning', () => {
    service.success('123123');
    expect(alert).toEqual({type: 'success', text: '123123'});
  });
  it('should type: warning', () => {
    service.success('123123');
    expect(alert).toEqual({type: 'success', text: '123123'});
  });
  it('should type: warning', () => {
    service.success('123123');
    expect(alert).toEqual({type: 'success', text: '123123'});
  });

});
