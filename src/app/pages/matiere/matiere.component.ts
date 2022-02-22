import { Component, OnInit } from '@angular/core';
import {Matiere} from "../../shared/model/emploie.model";
import {MatiereService} from "./matiere.service";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.scss']
})
export class MatiereComponent implements OnInit {
matiereList:Matiere[] = [];
matiere:Matiere = {};
matiereDialog:boolean = false;
submitted:boolean = true;
  items: any;
  constructor(
    private matiereService: MatiereService
  ) {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash'
      },
      {
        label: 'Angular',
        icon: 'pi pi-external-link',
      },
      {
        label: 'Router',
        icon: 'pi pi-upload',
        routerLink: '/fileupload'
      }
    ];
  }

  ngOnInit(): void {
    this.loadAllMatiere();
  }

  loadAllMatiere(){
    this.matiereService.findAll().subscribe((res: HttpResponse<Matiere[]>) => {
      if (res.body){
        this.matiereList = res.body;
      }
    })
  }
  openNew(){
    this.matiere = {};
    this.submitted=false;
    this.matiereDialog = true;
  }

}
