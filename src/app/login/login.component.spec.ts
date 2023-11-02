import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import createSpyObj = jasmine.createSpyObj;
import SpyObj = jasmine.SpyObj;
import {Observable} from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let socialAuthServiceMock: SpyObj<SocialAuthService>;

  socialAuthServiceMock = createSpyObj('socialAuthService', ['authState', 'initState', 'refreshAuthToken', 'signIn', 'signOut']);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [{ provide: SocialAuthService, useValue: {...socialAuthServiceMock, authState: new Observable()} }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});