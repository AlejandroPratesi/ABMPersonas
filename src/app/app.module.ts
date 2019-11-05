import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { PersonaComponent } from './componentes/persona/persona.component';
import { ListadoPersonasComponent } from './componentes/listado-personas/listado-personas.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

import { LoginServicesService} from './servicios/login-services.service';
import { PersonasServicesService } from './servicios/personas-services.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    ListadoPersonasComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ LoginServicesService,PersonasServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
