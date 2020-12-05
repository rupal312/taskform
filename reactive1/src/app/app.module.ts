import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformationComponent } from './information/information.component';
import { arrRouting } from "./app.routing";
import { FormtaskComponent } from './formtask/formtask.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowdataComponent } from './formtask/showdata/showdata.component';
import { EditdataComponent } from './formtask/editdata/editdata.component';

@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    FormtaskComponent,
    PagenotfoundComponent,
    ShowdataComponent,
    EditdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,HttpClientModule,
    FormsModule,
    arrRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
