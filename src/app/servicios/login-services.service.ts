import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  constructor() { }

  enviarMensajeConsola(mensaje:string){
    console.log(mensaje);
  }
}
