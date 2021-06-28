import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignUpRequestPayload } from './sign-up-request.payload';
import { AuthenticationService } from '../shared/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpRequestPayload: SignUpRequestPayload;
  signUpForm: FormGroup | undefined;

  constructor(private authenticationService: AuthenticationService, private router: Router,
    private toastr: ToastrService) {
    this.signUpRequestPayload = {
      username: '',
      email: '',
      password: ''
    };
  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  signUp() {
    this.signUpRequestPayload.email = this.signUpForm?.get('email')?.value;
    this.signUpRequestPayload.username = this.signUpForm?.get('username')?.value;
    this.signUpRequestPayload.password = this.signUpForm?.get('password')?.value;

    this.authenticationService.signUp(this.signUpRequestPayload)
      .subscribe(data => {
        this.router.navigate(['/login'],
          { queryParams: { registered: 'true' } });
      }, error => {
        console.log(error);
        this.toastr.error('Registration Failed! Please try again');
      });
  }
}

