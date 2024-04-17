import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadAdminArrendadorComponent } from './propiedad-admin-arrendador.component';

describe('PropiedadAdminArrendadorComponent', () => {
  let component: PropiedadAdminArrendadorComponent;
  let fixture: ComponentFixture<PropiedadAdminArrendadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropiedadAdminArrendadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropiedadAdminArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
