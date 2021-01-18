import { NgModule } from '@angular/core';
import { AdminPanelComponent } from './admin-panel.component';
import { MaterialModule } from 'src/app/material-ui.module';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { AppModuleCourses } from '../oyunlar/app.module';
import { OyunComponent } from '../oyunlar/components/oyun/oyun.component';

@NgModule({
    declarations: [AdminPanelComponent],
    imports: [
        MaterialModule,
        CommonModule,
        AppModuleCourses
        ],
    exports:[AdminPanelComponent],
    entryComponents:[OyunComponent],
    providers: [],
    bootstrap: []
  })
  export class AppModuleAdmin { }