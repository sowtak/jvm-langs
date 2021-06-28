import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginRequestPayload} from "./login-request.payload";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../shared/authentication.service";
import {ToastrService} from "ngx-toastr";
import {throwError} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | undefined;
  loginRequestPayload: LoginRequestPayload;
  registerSuccessMessage: string | undefined;
  isError: boolean | undefined;

  constructor(private authenticationService: AuthenticationService,
              private activatedRoute: ActivatedRoute, private router: Router,
              private toastr: ToastrService
              ) {
    this.loginRequestPayload = {
      username: '',
      password: ''
    };
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

    this.activatedRoute.queryParams
      .subscribe(params => {
        if (params.registered !== undefined && params.registered === 'true') {
          this.toastr.success('登録に成功しました');
          this.registerSuccessMessage = 'アカウント有効化用のメールが届いているか、受信箱を確認してください';
        }
      })
  }

  login() {
    this.loginRequestPayload.username = this.loginForm?.get('username')?.value;
    this.loginRequestPayload.password = this.loginForm?.get('password')?.value;

    this.authenticationService.login(this.loginRequestPayload).subscribe(data => {
      this.isError = false;
      this.router.navigateByUrl('');
      this.toastr.success('ログインに成功しました');
    }, error => {
      this.isError = true;
      throwError(error);
    })
  }

}
