import { NgModule } from '@angular/core';
import { CoursesComponent } from './components/oyunlar/courses.component';
import { MaterialModule } from 'src/app/material-ui.module';
import { AppModuleMenu } from '../menu/app.module';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import { OyunComponent } from './components/oyun/oyun.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [CoursesComponent, OyunComponent],
    imports: [
      MaterialModule,
      CommonModule,
      FlexLayoutModule,
      FormsModule,
      ReactiveFormsModule
    ],
    providers: [],
    bootstrap: []
  })
  export class AppModuleCourses{ }