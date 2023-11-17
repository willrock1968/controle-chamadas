import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChamadaComponent } from './form-chamada.component';

describe('FormChamadaComponent', () => {
  let component: FormChamadaComponent;
  let fixture: ComponentFixture<FormChamadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormChamadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormChamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
