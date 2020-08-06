import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutComponent } from './layout.component';
import { environment } from '../../environments/environment';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'transactions/:id', component: LayoutComponent },
        ]),
      ],
      providers: [],
      declarations: [LayoutComponent],
      //schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoud have correct regex assign to bctRegex', () => {
    expect(component.bctRegex).toEqual(environment.bctAddressRegex);
  });

  it('should have default false for submitted', () => {
    expect(component.submitted).toBe(false);
  });

  it('should redirect to transactions list page when onSubmit button is pressed', () => {
    expect(component.onSubmit).toHaveBeenCalledWith;
  });
});

// let submitEL: DebugElement = fixture.debugElement.query(By.css('button.btn-search[type=submit]'));
// expect(submitEL.nativeElement.disabled).toBe(true);
