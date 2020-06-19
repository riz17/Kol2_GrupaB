import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KAForumDetailsComponent } from './ka-forum-details.component';

describe('KAForumDetailsComponent', () => {
  let component: KAForumDetailsComponent;
  let fixture: ComponentFixture<KAForumDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KAForumDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KAForumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
