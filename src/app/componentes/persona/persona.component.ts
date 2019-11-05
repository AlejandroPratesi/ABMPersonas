import { Component, OnInit, Input ,Output } from '@angular/core';
import { Persona } from 'src/app/clases/persona';
import { PersonasServicesService } from 'src/app/servicios/personas-services.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input()  persona: Persona;
  @Input() indice: number;

  constructor(private personaServicio: PersonasServicesService) { }

  ngOnInit() {
  }

  emitirSaludo(){
  this.personaServicio.saludar.emit(this.indice);
  }
}
