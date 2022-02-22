import { Component, OnInit } from '@angular/core';
import {SalleClasse} from "../../shared/model/emploie.model";
import {salleClasseService} from "./salle-classe.service";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-salle-classe',
  templateUrl: './salle-classe.component.html',
  styleUrls: ['./salle-classe.component.scss']
})

export class SalleClasseComponent implements OnInit {
  salleclasseList:SalleClasse[] = [];
  salleclasse:SalleClasse = {};
  salleDialog:boolean=false;
  submitted:boolean = true;

  constructor( private salleClasseService:salleClasseService) { }

  ngOnInit(): void {
    this.loadAllSalleClasse();
  }

  loadAllSalleClasse(){
    this.salleClasseService.findAll().subscribe((res:HttpResponse<SalleClasse[]>) => {
      if(res.body){
        this.salleclasseList = res.body;
      }
    })
  }

  openNew(){
    this.salleclasse = {};
    this.submitted=false;
    this.salleDialog = true;
  }

}
