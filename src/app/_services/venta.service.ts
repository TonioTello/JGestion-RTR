import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Venta } from '../_models';

@Injectable({ providedIn: 'root' })
export class VentaService {

  readonly URL_API = 'http://localhost:3001/api/venta/';

    constructor(private http: HttpClient) { }

    signup(){
      return "Hola desde el venta de venta"
    }


    register(venta: Venta) {
      return this.http.post(this.URL_API+ 'registrar',  venta);
    }


    getVentas(){
      //et pagen = page;
      return this.http.get(this.URL_API + 'obtener');
              //.map( res => res.JSON());
    }

    searchVenta(venta_searched: Venta ){
      return this.http.post(this.URL_API+ 'buscar',  venta_searched);
    }

    delete(id: number) {
        //return this.http.delete(`${config.apiUrl}/users/${id}`);
    }
}
