import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from '../post-model';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import { LikePayload } from './like-payload';
import { LikeService } from '../like.service';
import { PostService } from '../post.service';
import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import {AuthenticationService} from "../../auth/shared/authentication.service";

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent implements OnInit {

  @Input()
  post!: PostModel;
  likePayload: LikePayload;
  faThumbsUp = faThumbsUp;
  isLoggedIn: boolean | undefined;

  constructor(private likeService: LikeService,
    private authenticationService: AuthenticationService,
    private postService: PostService, private toastr: ToastrService) {

    this.likePayload = {
      postId: undefined
    }
    this.authenticationService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);
  }

  ngOnInit(): void {
    this.updateLikeDetails();
  }

  private like() {
    this.likePayload.postId = this.post?.id;
    this.likeService.like(this.likePayload).subscribe(() => {
      this.updateLikeDetails();
    }, error => {
      this.toastr.error(error.error.message);
      throwError(error);
    });
  }

  private updateLikeDetails() {
    this.postService.getPost(this.post.id).subscribe(post => {
      this.post = post;
    });
  }
}
