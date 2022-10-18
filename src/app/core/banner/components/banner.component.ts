import {Component, OnInit} from '@angular/core';
import {BannerService} from '../services/banner.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {

  public infoText: string;
  public typeBanner: string;
  public statusBanner: boolean;

  bSub: Subscription;

  constructor(
    private bannerService: BannerService,
  ) {
  }

  ngOnInit(): void {
    this.bSub = this.bannerService.banner$.subscribe(banner => {
      this.infoText = banner?.text;
      this.typeBanner = banner?.type;
      this.statusBanner = !!banner;
    });
  }

  closeBanner() {
    this.bannerService.close();
  }

  ngOnDestroy(): void {
    if (this.bSub) {
      this.bSub.unsubscribe();
    }
  }

}
