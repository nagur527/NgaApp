import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { InputComponent } from './input/input.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, InputComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show keypad', () => {
    component.numberKeys = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.row').children.length).toEqual(3);
  });
  it('on click number 2 str value should be 2', () => {
    component.numberKeys = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    fixture.detectChanges();
    component.selectNumber(2);
    expect(component.str).toEqual('2');
  });
});
