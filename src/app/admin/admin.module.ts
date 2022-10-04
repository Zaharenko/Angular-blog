import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {CreatePageComponent} from './create-page/create-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {CoreModule} from "../core/core.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserGuard} from "./shared/service/user.guard";
import {QuillModule} from "ngx-quill";
import {SearchPipe} from "../pipe/search.pipe";
import {LimitSymbols} from "../pipe/limit.pipe";
import {SafeHtmlPipe} from "../pipe/safeHtml.pipe";

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    CreatePageComponent,
    EditPageComponent,
    SearchPipe,
    LimitSymbols,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          // todo: canActivate: [UserGuard]
          {path: 'dashboard', component: DashboardPageComponent},
          {path: 'create', component: CreatePageComponent},
          {path: 'post/:id/edit', component: EditPageComponent}
        ]
      }
    ]),
    CoreModule
  ],
  exports: [RouterModule,QuillModule],
  providers: [UserGuard]
})

export class AdminModule {

}
