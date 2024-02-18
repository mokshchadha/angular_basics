import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signupform: NgForm;

  defaultQuestion: string = 'pet';
  answer: string = '';
  genders = ['male', 'female', 'other'];
  submitted: boolean = false;

  user = {
    userName: '',
    email: '',
    secretQuestion: '',
    gender: '',
    answer: '',
  };
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupform.setValue({ // in this you have to provide the whole form
    //   userData: {
    //     userName: suggestedName,
    //   },
    // });
    this.signupform.form.patchValue({ userData: { userName: suggestedName } });
  }

  // onSubmit(form: NgForm) {
  //   console.log({ form });
  // }

  onSubmit() {
    console.log(this.signupform.value);
    console.log({ data: this.user });
    this.submitted = true;
    const user = {
      userName: '',
      email: '',
      secretQuestion: '',
      gender: '',
      answer: '',
    };
    user['userName'] = this.signupform.value.userData.userName;
    user['email'] = this.signupform.value.userData.email;
    user['secretQuestion'] = this.signupform.value.secret;
    user['answer'] = this.signupform.value.questionAnswer;
    user['gender'] = this.signupform.value.gender;
    this.user = user;
  }
}
