import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  onSubmit(formValue: any, isFormValid: boolean) {
    console.log("onSubmit is called");
    console.log("isFormValid = " + isFormValid);
    if (isFormValid) {
      console.log(formValue);
    }
  }
}
