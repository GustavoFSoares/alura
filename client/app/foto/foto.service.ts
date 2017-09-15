import { Http, Headers, Response } from '@angular/http';
import { FotoComponent } from './foto.component';
import { Observable } from 'rxjs'; 
import { Injectable } from '@angular/core';

@Injectable()
export class FotoService {

    http: Http;
    headers: Headers;
    url: string = 'v1/fotos';

    constructor(http: Http) { 

        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    lista(): Observable<FotoComponent[]> {
         let response = this.http.get(this.url)
         return response.map(res => res.json());
    }
    
    buscaPorId(id: FotoComponent): Observable<FotoComponent> {
        let response = this.http.get(this.url + '/' + id);
        return response.map(res => res.json());
    }

    cadastra(foto: FotoComponent): Observable<Response> {
        if(foto._id){
            return this.http.put(this.url + '/' + foto._id, JSON.stringify(foto), { headers: this.headers });
        }else{
            return this.http.post(this.url, JSON.stringify(foto), { headers: this.headers });
        }
    }

    remove(foto: FotoComponent): Observable<Response>{
        // console.log(foto._id);
        return this.http.delete(this.url + '/' + foto._id);
    }
}