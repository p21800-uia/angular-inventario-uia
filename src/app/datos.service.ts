import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPartida } from './IPartida';
import { ISolicitudMaterial } from './ISolicitudMaterial';
import { BDenMemoriaService } from './bden-memoria.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatosService {

  
  private idSolicitud: string = "";
  private idSolicitud$ = new BehaviorSubject<string>("");
  
  private SolicitudesUrl = 'api/SolicitudesMaterial';
  private solicitudesMaterial = new Observable<ISolicitudMaterial[]>();


  constructor(private http: HttpClient, bd:BDenMemoriaService) 
  {     
    this.idSolicitud = ""   
  }

 
  getSolicitudesMaterial(): Observable<ISolicitudMaterial[]> {
    this.solicitudesMaterial = this.http.get<ISolicitudMaterial[]>(this.SolicitudesUrl);
    return this.solicitudesMaterial;    
  }

  

  setIdSolicitud(id:string)
  {
    this.idSolicitud=id;
    this.idSolicitud$.next(this.idSolicitud);;
  }
  
  getIdSolicitudMaterial(): string {
    return this.idSolicitud;
  }
  
}