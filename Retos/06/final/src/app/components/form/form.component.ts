import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export class User {
  password: string;
  username: string;
  constructor(username: string,password: string){
    this.username = username;
    this.password = password;
  }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public loginUserForm: FormGroup;
  public submitted = false;
  public statusSubmitted = false;
  public userLoginCredentials = {
    username: '',
    password: '',
  }; 
  constructor() { 
    // FormGroup
    this.loginUserForm = new FormGroup({
      username: new FormControl(null,[Validators.required]),
      password: new FormControl(null,[Validators.required])
    });
  }
      

  ngOnInit(): void {
    //Observable para ver cambios en mi formulario
    console.log(this.loginUserForm.valueChanges.subscribe(_ => {
      console.log(this.loginUserForm);
    }));
  }

  // Nos pone esa propiedad en true
  onSubmit() { 
    this.submitted = true;
    console.log(this.loginUserForm)
    if( this.loginUserForm.status === 'VALID'){
      this.statusSubmitted = true;
      this.userLoginCredentials = this.loginUserForm.value;
      console.log(this.userLoginCredentials)
    
    }else {
      this.statusSubmitted = false;
    }
  }

}
