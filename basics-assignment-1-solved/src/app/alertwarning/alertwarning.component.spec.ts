import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertwarningComponent } from './alertwarning.component';

describe('AlertwarningComponent', () => {
  let component: AlertwarningComponent;
  let fixture: ComponentFixture<AlertwarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertwarningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertwarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
