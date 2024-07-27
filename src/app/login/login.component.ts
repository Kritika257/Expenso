import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userForm: FormGroup;
  isFormSubmitted: boolean = false;

  constructor() {
    this.userForm = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.maxLength(8),
      ]),
      emailId: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
        this.passwordStrengthValidator,
      ]),
    });
  }

  passwordStrengthValidator(control: AbstractControl) {
    const value = control.value;
    if (!value) return null;

    const hasUpperCase = /[A-Z]+/.test(value);
    const hasLowerCase = /[a-z]+/.test(value);
    const hasNumeric = /[0-9]+/.test(value);
    const hasSpecial = /[\W_]+/.test(value);

    const passwordValid =
      hasUpperCase && hasLowerCase && hasNumeric && hasSpecial;
    if (!passwordValid) {
      return { passwordStrength: true };
    }
    return null;
  }

  isLoginView: boolean = true;

  userRegisterObj: any = {
    userName: '',
    password: '',
    emailId: '',
  };

  userLogin: any = {
    userName: '',
    password: '',
  };

  router = inject(Router);

  onRegister() {
    debugger;
    const isLocalData = localStorage.getItem('angular18Local');
    if (isLocalData != null) {
      const localArray = JSON.parse(isLocalData);
      localArray.push(this.userRegisterObj);
      localStorage.setItem('angular18Local', JSON.stringify(localArray));
    } else {
      const localArray = [];
      localArray.push(this.userRegisterObj);
      localStorage.setItem('angular18Local', JSON.stringify(localArray));
    }
    alert('Registration Success');
  }

  onLogin() {
    debugger;
    const isLocalData = localStorage.getItem('angular18Local');
    if (isLocalData != null) {
      const users = JSON.parse(isLocalData);

      const isUserFound = users.find(
        (m: any) =>
          m.userName == this.userLogin.userName &&
          m.password == this.userLogin.password
      );
      if (isUserFound != undefined) {
        this.router.navigateByUrl('dashboard');
      } else {
        alert('User name or password is Wrong');
      }
    } else {
      alert('No User Found');
    }
  }
}
