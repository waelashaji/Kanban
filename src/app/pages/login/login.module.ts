import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule, 
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
  ], 
  providers: []
})
export class LoginModule {
}