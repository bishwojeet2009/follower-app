import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GethubProfileComponent } from './gethub-profile.component';

describe('GethubProfileComponent', () => {
  let component: GethubProfileComponent;
  let fixture: ComponentFixture<GethubProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GethubProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GethubProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
