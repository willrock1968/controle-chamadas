import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaAlunoComponent } from './matricular-aluno.component';

describe('MatriculaAlunoComponent', () => {
  let component: MatriculaAlunoComponent;
  let fixture: ComponentFixture<MatriculaAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatriculaAlunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatriculaAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
