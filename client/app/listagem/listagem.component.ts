import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto/foto.service';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html' 
})
export class ListagemComponent { 

    fotos: FotoComponent[] = [];
    service: FotoService;
    mensagem: string = "";

    constructor(service: FotoService) {
        this.service = service;
        let response = this.service.lista();
        response.subscribe(
            fotos => this.fotos = fotos,
            erro => console.log(erro)
        );
    }

    remove(foto: FotoComponent){
        let response = this.service.remove(foto);
        response.subscribe( () => {
            // console.log("Foto Removida");
            
            let novasFotos = this.fotos.splice(0)
            let indice = novasFotos.indexOf(foto);
            novasFotos.splice(indice, 1)
            this.fotos = novasFotos;
            this.mensagem = "Foto Removida"
        }, 
            erro => {
                console.log(erro);
                this.mensagem = "Foto NÃO Removida" ;
            }
        );
    }
}