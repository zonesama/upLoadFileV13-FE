import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CardListComponent} from './card-list/card-list.component';
import {NewCardComponent} from './new-card/new-card.component';
import {CardServiceService} from './card-service.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRountingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { EditCardComponent } from './edit-card/edit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    NewCardComponent,
    EditCardComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, AppRountingModule, HttpClientModule
  ],
  providers: [CardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
