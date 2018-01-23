import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Directive} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './components/app.component';
import {SsnValidatorDirective} from './directives/ssn.validator';
import {EqualValidatorDirective} from './directives/equal.validator';


@NgModule({
  declarations: [ AppComponent, EqualValidatorDirective, SsnValidatorDirective ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


