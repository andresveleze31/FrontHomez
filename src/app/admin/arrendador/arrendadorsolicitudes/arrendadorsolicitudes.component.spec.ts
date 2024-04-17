import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendadorsolicitudesComponent } from './arrendadorsolicitudes.component';

describe('ArrendadorsolicitudesComponent', () => {
  let component: ArrendadorsolicitudesComponent;
  let fixture: ComponentFixture<ArrendadorsolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrendadorsolicitudesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrendadorsolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
