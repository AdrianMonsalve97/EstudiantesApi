import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosCursoComponent } from './registros-curso.component';

describe('RegistrosCursoComponent', () => {
  let component: RegistrosCursoComponent;
  let fixture: ComponentFixture<RegistrosCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrosCursoComponent]
    });
    fixture = TestBed.createComponent(RegistrosCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
