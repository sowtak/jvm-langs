import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentPayload} from "./comment.payload";
import {baseUrl} from "../../environments/base-url";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getAllCommentsForPost(postId: number): Observable<CommentPayload[]> {
    return this.httpClient.get<CommentPayload[]>(baseUrl + '/api/comments/by-post/' + postId);
  }

  postComment(commentPayload: CommentPayload): Observable<any> {
    return this.httpClient.post<any>(baseUrl + '/api/comments', commentPayload);
  }

  getAllCommentsByUser(name: string): Observable<any> {
    return this.httpClient.get<CommentPayload>(baseUrl + '/api/comments/by-user' + name);
  }
}
