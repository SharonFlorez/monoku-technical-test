import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private _router: Router, private _userService: UserService) {}

  ngOnInit(): void {}

  public onSubmit() {
    this._userService
      .loginWithGoogle()
      .then(() => {
        this._router.navigate(['/inicio']);
      })
      .catch((error) => console.log(error));
  }
}
