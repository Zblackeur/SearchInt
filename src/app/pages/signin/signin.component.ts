import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService, SignIn } from './services/authentication.service';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  IsLoggingIn = false;
  form!: FormGroup;
  //user$=  this.authenticationService.currentUser$;


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private snackBar :MatSnackBar
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  /*login() {
    console.log("Nous sommes dans login");
    console.log(this.form.valid);

    //if (this.form.valid) {
      this.IsLoggingIn = true;
      console.log("2");
      const credentials: SignIn = {
        email: this.form.value.email,
        password: this.form.value.password
      };
      console.log(credentials);
      console.log("3");

      this.authenticationService.signIn(credentials).subscribe(
        () => {
          console.log("4");
          console.log(credentials.email);
          console.log(credentials.password);
          // L'authentification a réussi, effectuez des actions nécessaires ici
          //this.authenticationService.signIn({
            //email: this.form.value.email,
            //password: this.form.value.pswd
          //}).subscribe(() => {
            this.router.navigate(['home']);
         // },(error:any) => {this.IsLoggingIn=false})
          //fin
          console.log("5");
        },
        (error) => {
          // Gérez les erreurs d'authentification ici
          console.log("6");
          this.IsLoggingIn = false;
          this.snackBar.open(error.message, "OKZ",{
            duration: 5000
          });
        }
      );
    //}
    console.log("FiN login");

  }*/
  login() {
    console.log("Nous sommes dans login");
    console.log(this.form.valid);
    console.log("Email: ", this.form.value.email);
    console.log("Password: ", this.form.value.password);
    this.IsLoggingIn = true;

    this.authenticationService.signIn({

      email: this.form.value.email,
      password: this.form.value.password


    }).subscribe({
      next: () => this.router.navigate(['home'],{ queryParams: { email: this.form.value.email } }),
      error: error => {
        this.IsLoggingIn = false;
        this.snackBar.open(error.message, "OK", {
          duration: 5000
        })
        console.log("FiN login1"); }
    });
    console.log("FiN login2");}
}
