import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {
    this.prepareForm()
  }
  ngOnInit(): void {
    //this.submitted = false;

  }

  prepareForm() {
    this.form = this.formBuilder.group(
      {

        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ]

      }

    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    // this.form.reset()
    this.authService.login();
    this.reset()

  }

  reset() {
    this.submitted = false;
    Object.keys(this.form.controls).forEach((key) => {
      const control = this.form.controls[key];
      control.setValue('')
      control.markAsPristine();
      control.markAsUntouched();

    });
    this.router.navigate(['/dashboard']);
  }

}
