import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from '../_models';

@Injectable({ providedIn: 'root' })
export class ClienteService {

  readonly URL_API = 'http://localhost:3001/api/cliente/';

    constructor(private http: HttpClient) { }

    signup(){
      return "Hola desde el servicio de cliente"
    }


    register(cliente: Cliente) {
      return this.http.post(this.URL_API+ 'registrar',  cliente);
    }


    getClientes(){
      //et pagen = page;
      return this.http.get(this.URL_API + 'obtener');
              //.map( res => res.JSON());
    }

    searchCliente(cliente_searched: Cliente ){
      return this.http.post(this.URL_API+ 'buscar',  cliente_searched);
    }

    delete(id: number) {
        //return this.http.delete(`${config.apiUrl}/users/${id}`);
    }
}
