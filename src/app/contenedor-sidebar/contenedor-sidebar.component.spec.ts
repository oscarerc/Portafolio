import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorSidebarComponent } from './contenedor-sidebar.component';

describe('ContenedorSidebarComponent', () => {
  let component: ContenedorSidebarComponent;
  let fixture: ComponentFixture<ContenedorSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
