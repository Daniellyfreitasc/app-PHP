import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  //url base
  url = "http://localhost/api/PHP/";

  //Vetor de Cursos
  vetor:Curso[] | undefined;

  constructor(private http: HttpClient) { }

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
