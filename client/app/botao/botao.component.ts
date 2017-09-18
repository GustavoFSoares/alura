import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "botao",
    templateUrl: "./botao.component.html",
})
export class BotaoComponent{
    @Input() nome: string = "ok";
    @Input() estilo: string = "btn-default";
    @Input() tipo: string = "button";
    @Input() desabilitado: boolean = false;
    @Output() acao = new EventEmitter();
    @Input() confirmacao: boolean;

    executa(){
        if(this.confirmacao){
            if (confirm("Tem certeza que deseja Excluir?")) {
                this.acao.emit(null);
            }
            return;
        } else {
            this.acao.emit(null);        
        }
    }
}