import { CommonModule, DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { UserComponent } from "./user.component";
import { UserRoutingModule } from "./user-routing.module";
import { HeaderComponent } from "src/app/components/header/header.component";
import { IssueComponent } from "src/app/components/issue/issue.component";
import { BannerComponent } from "src/app/components/banner/banner.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { TooltipModule } from "../../components/tooltip/tooltip.module";
import { HighlighterPipe } from "../../components/pipe/highlighter-pipe";
import { UserService } from "../../services/user.service";



@NgModule({
  declarations: [UserComponent, HeaderComponent, IssueComponent, BannerComponent, HighlighterPipe],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule, 
    DragDropModule,
    TooltipModule
  ], 
  providers: [UserService, DatePipe]
})
export class UserModule {
}
