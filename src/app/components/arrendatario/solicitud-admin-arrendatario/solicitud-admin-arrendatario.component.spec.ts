import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudAdminArrendatarioComponent } from './solicitud-admin-arrendatario.component';

describe('SolicitudAdminArrendatarioComponent', () => {
  let component: SolicitudAdminArrendatarioComponent;
  let fixture: ComponentFixture<SolicitudAdminArrendatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudAdminArrendatarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitudAdminArrendatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
