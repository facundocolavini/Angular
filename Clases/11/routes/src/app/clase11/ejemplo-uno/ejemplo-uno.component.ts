import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ejemplo-uno',
  templateUrl: './ejemplo-uno.component.html',
  styleUrls: ['./ejemplo-uno.component.css']
})
export class EjemploUnoComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => console.log(params));
  }

}
