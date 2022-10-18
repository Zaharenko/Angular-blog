import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive, RouterLinkWithHref, RouterModule} from "@angular/router";
import {MainLayoutComponent} from "./components/main-layout/main-layout.component";
import {PostComponent} from "./components/post/post.component";
import {CoreModule} from "../core/core.module";
import {QuillViewHTMLComponent} from "ngx-quill";
import {DISQUS_SHORTNAME, DisqusModule} from "ngx-disqus";
import {AdminLinkComponent} from "./components/admin-link/admin-link.component";
import {CategotyIconComponent} from './components/categoty-icon/categoty-icon.component';
import {LoadingComponent} from './components/loading/loading.component';
import {IconButtonComponent} from "./components/icon-button/icon-button.component";


@NgModule({
  declarations: [
    MainLayoutComponent,
    PostComponent,
    AdminLinkComponent,
    CategotyIconComponent,
    LoadingComponent,
    IconButtonComponent
  ],
  exports: [
    MainLayoutComponent,
    PostComponent,
    AdminLinkComponent,
    CategotyIconComponent,
    LoadingComponent,
    IconButtonComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    RouterLinkActive,
    RouterLinkWithHref,
    CoreModule,
    QuillViewHTMLComponent,
    DisqusModule
  ],
  providers: [
    { provide: DISQUS_SHORTNAME, useValue: 'shortname_value' }
  ]
})
export class ShareModule { }
