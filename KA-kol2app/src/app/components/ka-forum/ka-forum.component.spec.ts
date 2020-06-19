import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KAForumComponent } from './ka-forum.component';

describe('KAForumComponent', () => {
  let component: KAForumComponent;
  let fixture: ComponentFixture<KAForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KAForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KAForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
