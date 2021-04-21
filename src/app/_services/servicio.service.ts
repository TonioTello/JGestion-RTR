import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Servicio } from '../_models';

@Injectable({ providedIn: 'root' })
export class ServicioService {

  readonly URL_API = 'http://localhost:3001/api/servicio/';

    constructor(private http: HttpClient) { }

    signup(){
      return "Hola desde el servicio de servicio"
    }


    register(servicio: Servicio) {
      return this.http.post(this.URL_API+ 'registrar',  servicio);
    }

    updateServicio(servicio: Servicio) {
      return this.http.put(this.URL_API+ 'actualizar',  servicio);
    }

    getServicios(){
      //et pagen = page;
      return this.http.get(this.URL_API + 'obtener');
              //.map( res => res.JSON());
    }

    searchServicio(servicio_searched: Servicio ){
      return this.http.post(this.URL_API+ 'buscar',  servicio_searched);
    }

    delete(id: number) {
        //return this.http.delete(`${config.apiUrl}/users/${id}`);
    }
}
