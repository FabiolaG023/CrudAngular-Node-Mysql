import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 LoginForm: FormGroup;


  constructor(private router: Router,
    public formBuilder: FormBuilder,
    private ngZone: NgZone) {

      this.LoginForm = this.formBuilder.group({

        usuario_id: [''],
        user: [''],
        pass: ['']

      });
     }

  ngOnInit(): void {
  }

  login() {
    console.log(this.LoginForm)

  }

}
