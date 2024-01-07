import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesswarningComponent } from './successwarning.component';

describe('SuccesswarningComponent', () => {
  let component: SuccesswarningComponent;
  let fixture: ComponentFixture<SuccesswarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuccesswarningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccesswarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
