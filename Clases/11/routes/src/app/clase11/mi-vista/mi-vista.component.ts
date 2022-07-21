import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mi-vista',
  templateUrl: './mi-vista.component.html',
  styleUrls: ['./mi-vista.component.css']
})
export class MiVistaComponent implements OnInit {

  public color: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => this.color = params['color']);
  }

}
