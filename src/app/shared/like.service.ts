import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LikePayload } from './like-button/like-payload';
import { Observable } from 'rxjs';
import {baseUrl} from "../../environments/base-url";

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private http: HttpClient) { }

  like(likePayload: LikePayload): Observable<any> {
    return this.http.post(baseUrl + '/api/likes/', likePayload);
  }
}

