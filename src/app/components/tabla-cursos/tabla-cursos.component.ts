import { Component, OnInit } from '@angular/core';
import { cursos } from './mock';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-cursos.component.html',
  styleUrls: ['./tabla-cursos.component.css']
})
export class TablaCursosComponent implements OnInit{
  public cursos?: any[];

  ngOnInit(): void {
      this.cursos = cursos;
  }
}
