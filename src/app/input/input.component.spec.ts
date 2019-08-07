import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('unparsed string should be Integer', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.str').textContent).toContain('Integer');
  });
  it('unparsed string should be 12#', () => {
    component.unparsedStr = '12#';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.str').textContent).toContain('12#');
  });
  it('computedVal string should be Text', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.computed-str').textContent).toContain('Text');
  });
  it('computedVal string should be M', () => {
    component.unparsedStr = '12#';
    component.computedVal = 'M';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.computed-str').textContent).toContain('M');
  });
});
