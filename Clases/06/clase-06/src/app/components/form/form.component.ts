import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export class Persona {
  nombre: string ;
  edad: number;
}

export class Hero {
  name: string;
  alterEgo: string;
  constructor(name: string,alterEgo: string){
    this.name = name;
    this.alterEgo = alterEgo;
  }
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  public formulario:FormGroup;
  public modeloPersona = new Persona();
  /* Ej de migracion */
  model = new Hero('Dr IQ','Facundo colavini');
  submitted = false;

  formGroupHero: FormGroup

  constructor(  
    //servicios form builder
    //public fb: FormBuilder

  ) {
   /*  //Grupo form builder
    this.formulario = this.fb.group({
     //Cada control se pasa como un nodo dentro de un objeto
     nombre: [null , [Validators.required]],
     edad: [null, [Validators.max(30), Validators.min(18)]],  
    }); */

    //Con instancias la diferencia es nada mas en sintanxis con la de arriba con form builder
    this.formulario = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      edad: new FormControl(null, [Validators.max(30), Validators.min(18)]),
    })
    //Ej migracion
    this.formGroupHero = new FormGroup({
      name: new FormControl(null,[Validators.required]),
      alterEgo: new FormControl(null)
    });
  }
  
  ngOnInit(): void {
    //Observable para ver cambios en mi formulario
    console.log(this.formulario.valueChanges.subscribe(_ => {
      console.log(this.formulario);
    }));
  }

  submit(valorFormulario:any){
    console.log(this.formulario);
  }
  verPersona(){
    console.log(this.modeloPersona)
  }
  
  cambiarEdad(){
    console.log(this.modeloPersona.edad = 27);
  }


  /* Ej de migracion */
  // Nos pone esa propiedad en true
  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero('', '');
  }
  skyDog(): Hero {
    const myHero =  new Hero('SkyDog','Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }

}
