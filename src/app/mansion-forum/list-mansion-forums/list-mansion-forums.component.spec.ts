import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMansionForumsComponent } from './list-mansion-forums.component';

describe('ListMansionForumsComponent', () => {
  let component: ListMansionForumsComponent;
  let fixture: ComponentFixture<ListMansionForumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMansionForumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMansionForumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
