import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/shared/post.service';
import { throwError } from 'rxjs';
import { CreatePostPayload } from './create-post.payload';
import {MansionForumService} from "../../mansion-forum/mansion-forum.service";
import {MansionForumModel} from "../../mansion-forum/mansion-forum-response";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup | undefined;
  postPayload: CreatePostPayload;
  mansionForums: Array<MansionForumModel> | undefined;

  constructor(private router: Router, private postService: PostService,
    private mansionForumService: MansionForumService) {
    this.postPayload = {
      title: '',
      content: '',
      mansionForumName: ''
    }
  }

  ngOnInit() {
    this.createPostForm = new FormGroup({
      title: new FormControl('', Validators.required),
      mansionForumName: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
    });
    this.mansionForumService.getAllMansionForums().subscribe((data) => {
      this.mansionForums = data;
    }, error => {
      throwError(error);
    });
  }

  createPost() {
    this.postPayload.title = this.createPostForm?.get('title')?.value;
    this.postPayload.mansionForumName = this.createPostForm?.get('mansionForumName')?.value;
    this.postPayload.content = this.createPostForm?.get('content')?.value;

    this.postService.createPost(this.postPayload).subscribe((data) => {
      this.router.navigateByUrl('/');
    }, error => {
      throwError(error);
    })
  }

  discardPost() {
    this.router.navigateByUrl('/');
  }

}
