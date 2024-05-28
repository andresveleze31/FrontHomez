import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendatarioChatComponent } from './arrendatario-chat.component';

describe('ArrendatarioChatComponent', () => {
  let component: ArrendatarioChatComponent;
  let fixture: ComponentFixture<ArrendatarioChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrendatarioChatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrendatarioChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
