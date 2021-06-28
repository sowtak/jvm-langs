import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MansionForumSidebarComponent } from './mansion-forum-sidebar.component';

describe('MansionForumSidebarComponent', () => {
  let component: MansionForumSidebarComponent;
  let fixture: ComponentFixture<MansionForumSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MansionForumSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MansionForumSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
