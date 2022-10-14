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


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    RelatedArticlesComponent,
    SubscribeEmailComponent,
    NotFoundComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    RelatedArticlesComponent,
    SubscribeEmailComponent,
  ],
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterLinkWithHref,
    RouterLink,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
