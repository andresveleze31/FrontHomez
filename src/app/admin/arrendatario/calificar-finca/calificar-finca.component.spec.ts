import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificarFincaComponent } from './calificar-finca.component';

describe('CalificarFincaComponent', () => {
  let component: CalificarFincaComponent;
  let fixture: ComponentFixture<CalificarFincaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalificarFincaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalificarFincaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
