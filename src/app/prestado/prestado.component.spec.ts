import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadoComponent } from './prestado.component';

describe('PrestadoComponent', () => {
  let component: PrestadoComponent;
  let fixture: ComponentFixture<PrestadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrestadoComponent]
    });
    fixture = TestBed.createComponent(PrestadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
