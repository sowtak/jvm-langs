import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMansionForumComponent } from './create-mansion-forum.component';

describe('CreateMansionForumComponent', () => {
  let component: CreateMansionForumComponent;
  let fixture: ComponentFixture<CreateMansionForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMansionForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMansionForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
