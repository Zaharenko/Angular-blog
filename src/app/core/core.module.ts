import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from "./menu/menu.component";
import { RouterLinkActive, RouterLinkWithHref } from "@angular/router";
import { RelatedArticlesComponent } from './related-articles/related-articles.component';
import { SubscribeEmailComponent } from './subscribe-email/subscribe-email.component';
import { IconButtonComponent } from './icon-button/icon-button.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    RelatedArticlesComponent,
    SubscribeEmailComponent,
    IconButtonComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    RelatedArticlesComponent,
    SubscribeEmailComponent,
    IconButtonComponent
  ],
    imports: [
        CommonModule,
        RouterLinkActive,
        RouterLinkWithHref
    ]
})
export class CoreModule { }
