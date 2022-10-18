import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MenuComponent} from "./menu/menu.component";
import {RouterLink, RouterLinkActive, RouterLinkWithHref} from "@angular/router";
import {RelatedArticlesComponent} from './related-articles/related-articles.component';
import {SubscribeEmailComponent} from './subscribe-email/subscribe-email.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BannerComponent} from "./banner/components/banner.component";
import {BannerService} from "./banner/services/banner.service";
import {ColorDirective} from "./banner/derictives/color.directive";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    RelatedArticlesComponent,
    SubscribeEmailComponent,
    NotFoundComponent,
    BannerComponent,
    ColorDirective
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    RelatedArticlesComponent,
    SubscribeEmailComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterLinkWithHref,
    RouterLink,
    ReactiveFormsModule
  ],
  providers: [BannerService]
})
export class CoreModule { }
