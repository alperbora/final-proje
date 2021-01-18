import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { MaterialModule } from 'src/app/material-ui.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [
      MaterialModule
    ],
    providers: [],
    bootstrap: []
  })
  export class AppModuleAuth { }