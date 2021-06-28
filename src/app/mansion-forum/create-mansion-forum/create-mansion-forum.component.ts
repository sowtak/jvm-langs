import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MansionForumModel } from '../mansion-forum-response';
import { Router } from '@angular/router';
import { MansionForumService } from '../mansion-forum.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-create-mansion-forum',
  templateUrl: './create-mansion-forum.component.html',
  styleUrls: ['./create-mansion-forum.component.css']
})
export class CreateMansionForumComponent implements OnInit {
  createMansionForumForm: FormGroup;
  mansionForumModel: MansionForumModel;
  name = new FormControl('');
  address = new FormControl('');

  constructor(private router: Router, private mansionForumService: MansionForumService) {
    this.createMansionForumForm = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    });
    this.mansionForumModel = {
      name: '',
      address: ''
    }
  }

  ngOnInit() {
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  createMansionForum() {
    this.mansionForumModel.name = this.createMansionForumForm.get('title')
      ?.value;
    this.mansionForumModel.name = this.createMansionForumForm.get('description')
      ?.value;
    this.mansionForumService.createMansionForum(this.mansionForumModel).subscribe(data => {
      this.router.navigateByUrl('/list-mansion-forums');
    }, error => {
      throwError(error);
    })
  }
}
