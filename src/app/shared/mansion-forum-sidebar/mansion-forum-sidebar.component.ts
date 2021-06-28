import { Component, OnInit } from '@angular/core';
import { MansionForumService } from 'src/app/mansion-forum/mansion-forum.service';
import { MansionForumModel } from 'src/app/mansion-forum/mansion-forum-response';

@Component({
  selector: 'app-mansion-forum-sidebar',
  templateUrl: './mansion-forum-sidebar.component.html',
  styleUrls: ['./mansion-forum-sidebar.component.css']
})
export class MansionForumSidebarComponent implements OnInit {
  mansionForums: Array<MansionForumModel> = [];
  displayViewAll: boolean | undefined;

  constructor(private mansionForumService: MansionForumService) {
    this.mansionForumService.getAllMansionForums().subscribe(data => {
      if (data.length > 3) {
        this.mansionForums = data.splice(0, 3);
        this.displayViewAll = true;
      } else {
        this.mansionForums = data;
      }
    });
  }

  ngOnInit(): void { }

}

