import { Injectable, EventEmitter } from '@angular/core';
import { Persona } from '../clases/persona';
import { LoginServicesService } from './login-services.service';

@Injectable()
export class PersonasServicesService {

  personas: Persona[] = [
    new Persona("Alejandro","pr"),
    new Persona("Indio","Solari")];

    saludar = new EventEmitter<number>();
  
  constructor(private loginServicio: LoginServicesService) {}

  agregarPersona(persona:Persona){
    this.loginServicio.enviarMensajeConsola("Inyectando.." + persona.apellido + ', ' + persona.nombre)
    this.personas.push(persona);
  }

}
