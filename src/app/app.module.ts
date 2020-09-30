import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Field1Component } from './field1/field1.component';
import { Field2Component } from './field2/field2.component';
import { Field3Component } from './field3/field3.component';


@NgModule({
  declarations: [
    AppComponent,
    Field1Component,
    Field2Component,
    Field3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
