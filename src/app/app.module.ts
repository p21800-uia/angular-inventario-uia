import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BDenMemoriaService } from './bden-memoria.service';
import { DatosService } from './datos.service';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ModalEditComponent } from './modal-edit/modal-edit.component';
import { FormsModule } from '@angular/forms';
import { ModalDetailsComponent } from './modal-details/modal-details.component';
import { SolicitudMaterialComponent } from './solicitud-material/solicitud-material.component';
import { ModalEditItemComponent } from './modal-edit-item/modal-edit-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalEditComponent,
    ModalDetailsComponent,
    SolicitudMaterialComponent,
    ModalEditItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    MatPaginatorModule,  
    MatDialogModule, 
    FormsModule,  
    MatIconModule,

    HttpClientInMemoryWebApiModule.forRoot(
      BDenMemoriaService, { dataEncapsulation: false }
)],
  providers: [DatosService], 
  bootstrap: [AppComponent]
})


export class AppModule { }
