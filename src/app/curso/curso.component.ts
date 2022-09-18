import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  nome: string = "Danielly";

  constructor() { }

  ngOnInit(): void {
    
  }

  //Cadastro
  cadastro():void{
    alert("Cadastro")
  }

  //Seleção
  selecao():void{
    alert("Seleção")
  }

  //Alterar
  alterar():void{
    alert("Alterar")
  }

  //Excluir
  excluir():void{
    alert("Excluir")
  }
}
