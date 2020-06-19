import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KAForumItemComponent } from './ka-forum-item.component';

describe('KAForumItemComponent', () => {
  let component: KAForumItemComponent;
  let fixture: ComponentFixture<KAForumItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KAForumItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KAForumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
