import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService,  AuthenticationService } from '../_services';

import { UserService } from './../_services';
import { User } from './../_models/';



declare let  M: any; //Mostrar mensaje usuando materialize

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserService]

})
export class RegisterComponent implements OnInit {
  registerForm: any;
  loading = false;
  submitted = false;

  user : User;

  constructor(
      private _userService : UserService,
      private formBuilder: FormBuilder,
      private router: Router,
      private authenticationService: AuthenticationService,
      private userService: UserService,
      private alertService: AlertService
  ) {
      // redirect to home if already logged in
/*       if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
      } */

      this.user = new User();

  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.loading = true;
/*       this.userService.register(this.registerForm.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.alertService.success('Registration successful', true);
                  this.router.navigate(['/login']);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });*/
  }

  onRegistrase(){

    console.log("Click en Registrase")

    this._userService.register(this.user)
    .subscribe(
      res=> {
      M.toast({html: 'User registrado...'});

      //let identity = res;
      //this.identity = identity;

      //localStorage.setItem('identity', JSON.stringify(identity));
      this.user = new User();  //limpiar el formulario
    },
    error =>{

      let errorMessageReg = <any>error;

/*       if(errorMessageReg != null){
        this.errorMessageReg = error.error.message;
        console.log(error.error.message);
      } */
      console.log(error.error.message);
    }
    );

  }
}
