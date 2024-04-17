import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudAdminArrendadorComponent } from './solicitud-admin-arrendador.component';

describe('SolicitudAdminArrendadorComponent', () => {
  let component: SolicitudAdminArrendadorComponent;
  let fixture: ComponentFixture<SolicitudAdminArrendadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudAdminArrendadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitudAdminArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
