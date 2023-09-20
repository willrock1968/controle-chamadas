import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelCursoComponent } from './nivel-curso.component';

describe('NivelCursoComponent', () => {
  let component: NivelCursoComponent;
  let fixture: ComponentFixture<NivelCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivelCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
