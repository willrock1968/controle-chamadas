import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNivelCursoComponent } from './form-nivel-curso.component';

describe('FormNivelCursoComponent', () => {
  let component: FormNivelCursoComponent;
  let fixture: ComponentFixture<FormNivelCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNivelCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNivelCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
