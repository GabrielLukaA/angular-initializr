import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './life-cycle/my-component.component';
import { MyComponentModule } from './life-cycle/my-component.module';
import { NewComponentComponent } from './components/new-component/new-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    //MyComponentComponent
  ],
  imports: [BrowserModule, AppRoutingModule, MyComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
