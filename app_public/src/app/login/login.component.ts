import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { HistoryService } from '../history.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formError: string = '';

  public credentials = {
    name: '',
    email: '',
    password: ''
  };

  public pageContent = {
    header: {
      title: 'Sign in to Loc8r',
      strapline: ''
    },
    sidebar: ''
  };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private historyService: HistoryService
  ) { }

  ngOnInit() {
  }

  public onLoginSubmit(): void {
    this.formError = '';
    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'All fields are required, please try again';
    } else {
      this.doLogin();
    }
  }

  private doLogin(): void {
    this.authenticationService.login(this.credentials)
      .then(() => this.router.navigateByUrl(this.historyService.getLastNonLoginUrl()))
      .catch((message) => this.formError = message);
  }
}
