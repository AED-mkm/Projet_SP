
import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {SalleClasse} from "../../shared/model/emploie.model";
import {SERVER_API_URL} from "../../app.constant";
import {Observable} from "rxjs";

type  EntityResponseType = HttpResponse<SalleClasse>;
type  EntityArrayResponseType = HttpResponse<SalleClasse[]>;

@Injectable({
  providedIn:'root'
})

export class salleClasseService{

  public ressourceUrl = "SERVER_API_URL + '/salle-classe'";

  constructor(protected http:HttpClient){}

  create(salleclasse:SalleClasse):Observable<EntityResponseType>{
    return this.http.post<SalleClasse>(this.ressourceUrl,salleclasse,{ observe:'response'});
  }

  update(salleclasse:SalleClasse):Observable<EntityResponseType>{
    return this.http.post<SalleClasse>(this.ressourceUrl,salleclasse,{ observe:'response'});

  }

  findAll():Observable<EntityArrayResponseType>{
     return this.http.get<SalleClasse[]>(this.ressourceUrl,{observe:'response'});
  }

  delete(id:number):Observable<HttpResponse<any>>{
    return this.http.delete<SalleClasse>(this.ressourceUrl+'/'+id,{ observe:'response'});

  }




}
