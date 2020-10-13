import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {TreeModule} from 'primeng/tree';
import {FieldsetModule} from 'primeng/fieldset';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {PanelMenuModule} from 'primeng/panelmenu';
import {CalendarModule} from 'primeng/calendar';
import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {SplitButtonModule} from 'primeng/splitbutton';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    CardModule,
    OrganizationChartModule,
    TreeModule,
    FieldsetModule,
    ScrollPanelModule,
    PanelMenuModule,
    CalendarModule,
    DialogModule,
    OverlayPanelModule,
    SplitButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
