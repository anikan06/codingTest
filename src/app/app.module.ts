import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FruitsComponent } from './fruits/fruits.component';
import { VeggiesComponent } from './veggies/veggies.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DataServiceService } from './services/data-service.service';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FruitsComponent,
    VeggiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    provideAnimationsAsync(),
    DataServiceService
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
