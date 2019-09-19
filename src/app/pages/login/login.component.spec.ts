import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HomeComponent } from '../home/home.component';
import { FormBuilder } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('LoginComponent should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Should have a h1 tag', () => {
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    // Results of compilation
    const compile = fixture.debugElement.nativeElement;

    // Our finally test
    const tag = compile.querySelector('h1');

    expect(tag).toBeTruthy();
  });

  it('Should have h1 tag define as \'Identifiez-vous\'', () => {
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    // Results of compilation
    const compile = fixture.debugElement.nativeElement;

    const tag = compile.querySelector('h1');

    expect(tag.textContent).toBe('Identifiez-vous');
  });

  it('Should have a title attribute', () => {
    const app = fixture.debugElement.componentInstance;

    expect(app.title).toBeTruthy();
  });

  it(`title attribute value should be 'Identifiez-vous'`, () => {
    const app = fixture.debugElement.componentInstance;

    expect(app.title).toEqual('Identifiez-vous');
  });

  it('Should have a FormGroup instance', () => {
    const app = fixture.debugElement.componentInstance;

    expect(app.loginForm).toBeDefined();
  });

  it('Should have 2 controls in FormGroup instance', () => {
    const app = fixture.debugElement.componentInstance;

    expect(Object.keys(app.loginForm.controls).length).toEqual(2);
  });
});
