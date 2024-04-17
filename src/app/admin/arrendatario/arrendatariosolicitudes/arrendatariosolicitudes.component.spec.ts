import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendatariosolicitudesComponent } from './arrendatariosolicitudes.component';

describe('ArrendatariosolicitudesComponent', () => {
  let component: ArrendatariosolicitudesComponent;
  let fixture: ComponentFixture<ArrendatariosolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrendatariosolicitudesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrendatariosolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
