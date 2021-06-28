import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MansionForumModel} from "./mansion-forum-response";
import {baseUrl} from "../../environments/base-url";

@Injectable({
  providedIn: 'root'
})
export class MansionForumService {
  constructor(private http: HttpClient) { }

  getAllMansionForums(): Observable<Array<MansionForumModel>> {
    return this.http.get<Array<MansionForumModel>>(baseUrl + '/api/mansion-forum');
  }

  createMansionForum(mansionForumModel: MansionForumModel): Observable<MansionForumModel> {
    return this.http.post<MansionForumModel>(baseUrl + '/api/mansion-forum',
      mansionForumModel);
  }
}

