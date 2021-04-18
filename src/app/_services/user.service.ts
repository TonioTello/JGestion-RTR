import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {

  readonly URL_API = 'http://localhost:3001/api/usuario/';

  identity: any;

    constructor(private http: HttpClient) { }

    loginUp(user: User){
      return this.http.post(this.URL_API+ 'login',  user);
    }

    register(user: User) {
      return this.http.post(this.URL_API+ 'registrar',  user);
    }


    getUsers(){
      //et pagen = page;
      return this.http.get(this.URL_API + 'obtener');
              //.map( res => res.JSON());
    }

    searchUser(user_searched: User ){
      return this.http.post(this.URL_API+ 'buscar',  user_searched);
    }

    delete(id: number) {
        //return this.http.delete(`${config.apiUrl}/users/${id}`);
    }

    getIdentity(){
      let identity = localStorage.getItem('identity');
        if(identity != 'undefined')
          this.identity = identity;
        else
          this.identity = null;

        console.log("Fron de local Storage: \n" + identity);
        return identity;
    }
}
