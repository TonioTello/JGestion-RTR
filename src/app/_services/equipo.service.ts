import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Equipo } from '../_models';

@Injectable({ providedIn: 'root' })
export class EquipoService {

  readonly URL_API = 'http://localhost:3001/api/equipo/';

    constructor(private http: HttpClient) { }

    signup(){
      return "Hola desde el servicio de equipo"
    }


    register(equipo: Equipo) {
      return this.http.post(this.URL_API+ 'registrar',  equipo);
    }

    getEquipos(){
      //et pagen = page;
      return this.http.get(this.URL_API + 'obtener');
              //.map( res => res.JSON());
    }

    searchEquipo(equipo_searched: Equipo ){
      return this.http.post(this.URL_API+ 'buscar',  equipo_searched);
    }



    delete(id: number) {
        //return this.http.delete(`${config.apiUrl}/users/${id}`);
    }
}
