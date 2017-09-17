import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('f') signupForm: NgForm;
    subscriptions = ['Basic', 'Advanced', 'Pro'];
    defaultSubscription = 'Advanced';
    signupData = {
        email: '',
        password: '',
        subscription: ''
    };
    formSubmitted = false;

    onSubmit() {
        this.formSubmitted = true;
        console.log(this.signupForm.value);        
        this.signupData.email = this.signupForm.value.email;
        this.signupData.password = this.signupForm.value.password;
        this.signupData.subscription = this.signupForm.value.subscriptionType;
        this.signupForm.reset();
    }
}
