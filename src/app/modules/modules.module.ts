import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    DashboardComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatTableModule,
    MatCardModule,
    FlexLayoutModule
  ],
  exports: [
    DashboardComponent,
    PostsComponent
  ]
})
export class ModulesModule { }
