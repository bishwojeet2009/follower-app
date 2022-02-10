import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GethubFollowersComponent } from './gethub-followers.component';

describe('GethubFollowersComponent', () => {
  let component: GethubFollowersComponent;
  let fixture: ComponentFixture<GethubFollowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GethubFollowersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GethubFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
