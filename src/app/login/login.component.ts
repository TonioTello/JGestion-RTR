import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService } from '../_services/index';

import { UserService } from './../_services';
import { User } from './../_models/';



declare let  M: any; //Mostrar mensaje usuando materialize


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]

})
export class LoginComponent implements OnInit {
  loginForm: any;
  loading = false;
  submitted = false;
  returnUrl: any;
  identity: any;

  user : User;
  errorMessage: any;
  errorMessageReg: any;

  constructor(
      private _userService : UserService,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService
  ) {
      // redirect to home if already logged in
/*       if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
      } */

      this.user = new User();
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

      this.identity = this._userService.getIdentity();
      console.log(this.identity);
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.loading = true;
      // this.authenticationService.login(this.f.username.value, this.f.password.value)
      //     .pipe(first())
      //     .subscribe(
      //         data => {
      //             this.router.navigate([this.returnUrl]);
      //         },
      //         error => {
      //             this.alertService.error(error);
      //             this.loading = false;
      //         });

  }

  onLogin(){
    console.log("CLick en Login")
    //console.log(this.user)
    this._userService.loginUp(this.user)
    .subscribe(
      res=> {
      M.toast({html: 'Usuario loged...'});

      let identity = res;
       this.identity = identity;

      if(this.identity._id){
        localStorage.setItem('identity', JSON.stringify(identity));
      }
      else{
        alert('El usuario no esta identificado correctamente');
      }
      this.user = new User(  0,  ' ',  ' ', ' ', ' ', ' ', ' ' );
      console.log(identity);
    },
    error =>{
      let errorMessage = <any>error;

      if(errorMessage != null){
        this.errorMessage = error.error.message;
        console.log(error.error.message);
      }
    }

    );
    //console.log(this.user);

  }

  onLogout(){
    console.log('Logout...')
    localStorage.removeItem('identity');
    localStorage.clear();
    this.identity = null;
    this.errorMessage = null;
    this.errorMessageReg = null;
  }

}
