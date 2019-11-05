import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/app/clases/persona';
import { LoginServicesService } from '../../servicios/login-services.service'
import { PersonasServicesService } from 'src/app/servicios/personas-services.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

 // @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput:string;
  apellidoInput:string;

  constructor(private logingService: LoginServicesService,private personaServicio: PersonasServicesService)
               {
                this.personaServicio.saludar.subscribe(
                  (indice:number) => alert(indice)
                );
               }

  ngOnInit() {
  }

  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput,this.apellidoInput);
     //this.personaCreada.emit(persona1);
     this.personaServicio.agregarPersona(persona1);
  }
}
