import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { IPartida } from './IPartida';

@Injectable({
  providedIn: 'root',
})
export class BDenMemoriaService implements InMemoryDbService {
  createDb() {
    const SolicitudesMaterial = [
        {
            "id": "SSM",
            "name": "Alfonso Miguel Reyes",
            "estatus": "Apartada",
            "clase": "SSM",
            "descripcion": null,
            "idItem": null,
            "nameItem": null,
            "idCategoria": null,
            "nameCategoria": null,
            "nameLote": null,
            "cantidad": "5",
            "idProveedor": null,
            "minimoNivel": null,
            "items": [
                {
                    "id": "710-121-Silla ejecutiva clase 1-0",
                    "name": "710-121-Silla ejecutiva clase 1-0",
                    "clase": "Item",
                    "namePartida": null,
                    "nameSubpartida": "Silla",
                    "nameCategoria": "Silla ejecutiva clase 1",
                    "idPartida": null,
                    "idSubpartida": "120",
                    "idCategoria": "121",
                    "estatus": "Entregado"
                },
                {
                    "id": "710-121-Silla ejecutiva clase 1-4",
                    "name": "710-121-Silla ejecutiva clase 1-4",
                    "clase": "Item",
                    "namePartida": null,
                    "nameSubpartida": "Silla",
                    "nameCategoria": "Silla ejecutiva clase 1",
                    "idPartida": null,
                    "idSubpartida": "120",
                    "idCategoria": "121",
                    "estatus": "Entregado"
                },
                {
                    "id": "710-121-Silla ejecutiva clase 1-3",
                    "name": "710-121-Silla ejecutiva clase 1-3",
                    "clase": "Item",
                    "namePartida": null,
                    "nameSubpartida": "Silla",
                    "nameCategoria": "Silla ejecutiva clase 1",
                    "idPartida": null,
                    "idSubpartida": "120",
                    "idCategoria": "121",
                    "estatus": "Entregado"
                },
                {
                    "id": "710-121-Silla ejecutiva clase 1-2",
                    "name": "710-121-Silla ejecutiva clase 1-2",
                    "clase": "Item",
                    "namePartida": null,
                    "nameSubpartida": "Silla",
                    "nameCategoria": "Silla ejecutiva clase 1",
                    "idPartida": null,
                    "idSubpartida": "120",
                    "idCategoria": "121",
                    "estatus": "Entregado"
                },
                {
                    "id": "710-121-Silla ejecutiva clase 1-1",
                    "name": "710-121-Silla ejecutiva clase 1-1",
                    "clase": "Item",
                    "namePartida": null,
                    "nameSubpartida": "Silla",
                    "nameCategoria": "Silla ejecutiva clase 1",
                    "idPartida": null,
                    "idSubpartida": "120",
                    "idCategoria": "121",
                    "estatus": "Entregado"
                },
                {
                    "id": "830-333-Librero ejecutiva clase 3-2",
                    "name": "830-333-Librero ejecutiva clase 3-2",
                    "clase": "Item",
                    "namePartida": null,
                    "nameSubpartida": "Librero",
                    "nameCategoria": "Librero ejecutiva clase 3",
                    "idPartida": null,
                    "idSubpartida": "330",
                    "idCategoria": "333",
                    "estatus": "Entregado"
                },
                {
                    "id": "830-333-Librero ejecutiva clase 3-4",
                    "name": "830-333-Librero ejecutiva clase 3-4",
                    "clase": "Item",
                    "namePartida": null,
                    "nameSubpartida": "Librero",
                    "nameCategoria": "Librero ejecutiva clase 3",
                    "idPartida": null,
                    "idSubpartida": "330",
                    "idCategoria": "333",
                    "estatus": "Entregado"
                },
                {
                    "id": "830-333-Librero ejecutiva clase 3-1",
                    "name": "830-333-Librero ejecutiva clase 3-1",
                    "clase": "Item",
                    "namePartida": null,
                    "nameSubpartida": "Librero",
                    "nameCategoria": "Librero ejecutiva clase 3",
                    "idPartida": null,
                    "idSubpartida": "330",
                    "idCategoria": "333",
                    "estatus": "Entregado"
                },
                {
                    "id": "810-331-Librero ejecutiva clase 1-3",
                    "name": "810-331-Librero ejecutiva clase 1-3",
                    "clase": "Item",
                    "namePartida": null,
                    "nameSubpartida": "Librero",
                    "nameCategoria": "Librero ejecutiva clase 1",
                    "idPartida": null,
                    "idSubpartida": "330",
                    "idCategoria": "331",
                    "estatus": "Entregado"
                },
                {
                    "id": "830-333-Librero ejecutiva clase 3-3",
                    "name": "830-333-Librero ejecutiva clase 3-3",
                    "clase": "Item",
                    "namePartida": null,
                    "nameSubpartida": "Librero",
                    "nameCategoria": "Librero ejecutiva clase 3",
                    "idPartida": null,
                    "idSubpartida": "330",
                    "idCategoria": "333",
                    "estatus": "Entregado"
                },
                {
                    "id": "810-331-Librero ejecutiva clase 1-1",
                    "name": "810-331-Librero ejecutiva clase 1-1",
                    "clase": "Item",
                    "namePartida": null,
                    "nameSubpartida": "Librero",
                    "nameCategoria": "Librero ejecutiva clase 1",
                    "idPartida": null,
                    "idSubpartida": "330",
                    "idCategoria": "331",
                    "estatus": "Entregado"
                },
                {
                    "id": "830-333-Librero ejecutiva clase 3-0",
                    "name": "830-333-Librero ejecutiva clase 3-0",
                    "clase": "Item",
                    "namePartida": null,
                    "nameSubpartida": "Librero",
                    "nameCategoria": "Librero ejecutiva clase 3",
                    "idPartida": null,
                    "idSubpartida": "330",
                    "idCategoria": "333",
                    "estatus": "Entregado"
                },
                {
                    "id": "810-331-Librero ejecutiva clase 1-2",
                    "name": "810-331-Librero ejecutiva clase 1-2",
                    "clase": "Item",
                    "namePartida": null,
                    "nameSubpartida": "Librero",
                    "nameCategoria": "Librero ejecutiva clase 1",
                    "idPartida": null,
                    "idSubpartida": "330",
                    "idCategoria": "331",
                    "estatus": "Entregado"
                },
                {
                    "id": "810-331-Librero ejecutiva clase 1-4",
                    "name": "810-331-Librero ejecutiva clase 1-4",
                    "clase": "Item",
                    "namePartida": null,
                    "nameSubpartida": "Librero",
                    "nameCategoria": "Librero ejecutiva clase 1",
                    "idPartida": null,
                    "idSubpartida": "330",
                    "idCategoria": "331",
                    "estatus": "Entregado"
                },
                {
                    "id": "810-331-Librero ejecutiva clase 1-0",
                    "name": "810-331-Librero ejecutiva clase 1-0",
                    "clase": "Item",
                    "namePartida": null,
                    "nameSubpartida": "Librero",
                    "nameCategoria": "Librero ejecutiva clase 1",
                    "idPartida": null,
                    "idSubpartida": "330",
                    "idCategoria": "331",
                    "estatus": "Entregado"
                }
            ]
        },
        {
            "id": "SSM-1",
            "name": "Arturo Ivan",
            "estatus": "Apartada",
            "clase": "SSM",
            "descripcion": null,
            "idItem": null,
            "nameItem": null,
            "idCategoria": null,
            "nameCategoria": null,
            "nameLote": null,
            "cantidad": "5",
            "idProveedor": null,
            "minimoNivel": null,
            "items": [
                {
                    "id": "810-221-Escritorio ejecutiva clase 1-0",
                    "name": "810-221-Escritorio ejecutiva clase 1-0",
                    "clase": "Item",
                    "namePartida": null,
                    "nameSubpartida": "Escritorio",
                    "nameCategoria": "Escritorio ejecutiva clase 1",
                    "idPartida": null,
                    "idSubpartida": "220",
                    "idCategoria": "221",
                    "estatus": "Apartado"
                },
                {
                    "id": "810-221-Escritorio ejecutiva clase 1-1",
                    "name": "810-221-Escritorio ejecutiva clase 1-1",
                    "clase": "Item",
                    "namePartida": null,
                    "nameSubpartida": "Escritorio",
                    "nameCategoria": "Escritorio ejecutiva clase 1",
                    "idPartida": null,
                    "idSubpartida": "220",
                    "idCategoria": "221",
                    "estatus": "Apartado"
                },
                {
                    "id": "810-221-Escritorio ejecutiva clase 1-2",
                    "name": "810-221-Escritorio ejecutiva clase 1-2",
                    "clase": "Item",
                    "namePartida": null,
                    "nameSubpartida": "Escritorio",
                    "nameCategoria": "Escritorio ejecutiva clase 1",
                    "idPartida": null,
                    "idSubpartida": "220",
                    "idCategoria": "221",
                    "estatus": "Apartado"
                },
                {
                    "id": "810-221-Escritorio ejecutiva clase 1-4",
                    "name": "810-221-Escritorio ejecutiva clase 1-4",
                    "clase": "Item",
                    "namePartida": null,
                    "nameSubpartida": "Escritorio",
                    "nameCategoria": "Escritorio ejecutiva clase 1",
                    "idPartida": null,
                    "idSubpartida": "220",
                    "idCategoria": "221",
                    "estatus": "Apartado"
                },
                {
                    "id": "810-221-Escritorio ejecutiva clase 1-3",
                    "name": "810-221-Escritorio ejecutiva clase 1-3",
                    "clase": "Item",
                    "namePartida": null,
                    "nameSubpartida": "Escritorio",
                    "nameCategoria": "Escritorio ejecutiva clase 1",
                    "idPartida": null,
                    "idSubpartida": "220",
                    "idCategoria": "221",
                    "estatus": "Apartado"
                }
            ]
        }
    ]

    
    return {SolicitudesMaterial};
  }

  
}