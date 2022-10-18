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
import {ShareModule} from "../shared/share.module";
import { EmailListComponent } from './email-list/email-list.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    CreatePageComponent,
    EditPageComponent,
    SearchPipe,
    LimitSymbols,
    EmailListComponent
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
          {path: 'dashboard', component: DashboardPageComponent, canActivate: [UserGuard]},
          {path: 'create', component: CreatePageComponent, canActivate: [UserGuard]},
          {path: 'email-list', component: EmailListComponent, canActivate: [UserGuard]},
          {path: 'post/:id/edit', component: EditPageComponent, canActivate: [UserGuard]}
        ]
      }
    ]),
    CoreModule,
    HttpClientModule,
    ShareModule
  ],
  exports: [RouterModule,QuillModule],
  providers: [UserGuard]
})

export class AdminModule {

}
