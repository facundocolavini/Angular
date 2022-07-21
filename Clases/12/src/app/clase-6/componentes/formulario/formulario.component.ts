import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export class Persona {
  nombre: string;
  edad: number;
}

export class Hero {
  name: string;
  alterEgo: string;
  constructor(name: string, alterEgo: string) {
    this.name = name;
    this.alterEgo = alterEgo;
  }
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  /* Explicación principal */
  public formulario: FormGroup;
  public modeloPersona = new Persona();
  /* Formulario Template Driven */ 
  model = new Hero('Dr IQ', 'Juan Perez');
  submitted = false;
  /* Formulario con Reactive Forms */
  formGroupHero: FormGroup;

  constructor(
    //private fb: FormBuilder //Opcional
  ) {
    // Incialización de formulario con Form Builder
    /*this.formulario = this.fb.group({
      nombre: [null, [Validators.required]],
      edad: [null, [Validators.max(30), Validators.min(18)]]
    });*/
    this.formulario = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      edad: new FormControl(null, [Validators.max(30), Validators.min(18)])
    });

    this.formGroupHero = new FormGroup({
      name: new FormControl('Dr IQ', [Validators.required]),
      alterEgo:  new FormControl('Juan Perez')
    });
  }

  ngOnInit(): void {
    this.formulario.valueChanges.subscribe(_ => {
      console.log(this.formulario);
    });
  }

  submit(valorFormulario: any) {
    console.log(this.formulario);
  }

  verPersona() {
    console.log(this.modeloPersona);
  }

  cambiarEdad() {
    this.modeloPersona.edad = 18;
  }

  /**** Metodos para formulario Template Driven *****/
  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.model = new Hero('', '');
  }

  skyDog(): Hero {
    const myHero =  new Hero('SkyDog', 'Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }

}
