import { Component, OnInit } from '@angular/core';
import { Persona } from './clases/persona';
import { LoginServicesService } from './servicios/login-services.service';
import { PersonasServicesService } from './servicios/personas-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'Listada de personas';
 personas: Persona[] = [];
  
 constructor(private loginService:LoginServicesService,
             private personasServices: PersonasServicesService){}

 ngOnInit(): void {
 this.personas = this.personasServices.personas;
}

onPersonaAgregada(persona: Persona){
   this.loginService.enviarMensajeConsola("Enviando desde el servicio de personas");
   this.personasServices.agregarPersona(persona);
  }
}
