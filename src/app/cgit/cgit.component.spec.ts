import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgitComponent } from './cgit.component';

describe('CgitComponent', () => {
  let component: CgitComponent;
  let fixture: ComponentFixture<CgitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
