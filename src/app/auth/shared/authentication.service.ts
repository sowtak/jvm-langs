import {EventEmitter, Injectable, Output} from '@angular/core';
import { LocalStorageService } from "ngx-webstorage";
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {baseUrl} from "../../../environments/base-url";
import {LoginRequestPayload} from "../login/login-request.payload";
import {map, tap} from "rxjs/operators";
import {LoginResponse} from "../login/login-response.payload";
import {SignUpRequestPayload} from "../sign-up/sign-up-request.payload";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter();
  @Output() username: EventEmitter<string> = new EventEmitter();

  refreshTokenPayload = {
    refreshToken: this.getRefreshToken(),
    username: this.getUsername()
  }
  constructor(private httpClient: HttpClient,
              private localStorage: LocalStorageService) { }

  signUp(signUpRequestPayload: SignUpRequestPayload): Observable<any> {
    return this.httpClient.post(baseUrl + '/api/auth/signup', signUpRequestPayload, { responseType: 'text'})
  }

  login(loginRequestPayload: LoginRequestPayload): Observable<void> {
    return this.httpClient.post<LoginResponse>(baseUrl + '/api/auth/login',
      loginRequestPayload).pipe(map(data => {
        this.localStorage.store('authenticationToken', data.authenticationToken);
    }))
  }

  getJwtToken() {
    return this.localStorage.retrieve('authenticationToken');
  }

  refreshToken() {
    return this.httpClient.post<LoginResponse>(baseUrl + '/api/auth/refresh/token',
      this.refreshTokenPayload)
      .pipe(tap(response => {
        this.localStorage.clear('authenticationToken');
        this.localStorage.clear('expiresAt');

        this.localStorage.store('authenticationToken', response.authenticationToken);
        this.localStorage.store('expiresAt', response.expiresAt);
      }))
  }

  //トークン削除
  logout() {
    this.httpClient.post(baseUrl + '/api/auth/logout', this.refreshTokenPayload,
      { responseType: 'text'})
      .subscribe(data => {
        console.log(data);
      }, error => {
        throwError(error);
      })
    this.localStorage.clear('authenticationToken');
    this.localStorage.clear('username');
    this.localStorage.clear('refreshToken');
    this.localStorage.clear('expiresAt');
  }

  getUsername() {
    return this.localStorage.retrieve('username');
  }

  getRefreshToken() {
    return this.localStorage.retrieve('refreshToken');
  }

  isLoggedIn(): boolean {
    return this.getJwtToken() != null;
  }
}
