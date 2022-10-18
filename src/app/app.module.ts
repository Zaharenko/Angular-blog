import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './home/components/home-page/home-page.component';
import {PostPageComponent} from './home/components/post-page/post-page.component';
import {CoreModule} from "./core/core.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./shared/auth.interceptore";
import {QuillViewHTMLComponent} from "ngx-quill";
import {ShareModule} from "./shared/share.module";



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PostPageComponent
  ],
  imports: [
    BrowserModule,
    ShareModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    QuillViewHTMLComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
