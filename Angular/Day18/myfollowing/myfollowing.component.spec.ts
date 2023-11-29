import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfollowingComponent } from './myfollowing.component';

describe('MyfollowingComponent', () => {
  let component: MyfollowingComponent;
  let fixture: ComponentFixture<MyfollowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyfollowingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
