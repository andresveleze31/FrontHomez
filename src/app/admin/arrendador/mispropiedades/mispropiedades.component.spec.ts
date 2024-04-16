import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MispropiedadesComponent } from './mispropiedades.component';

describe('MispropiedadesComponent', () => {
  let component: MispropiedadesComponent;
  let fixture: ComponentFixture<MispropiedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MispropiedadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MispropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
