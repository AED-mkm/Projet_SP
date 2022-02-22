import {HttpClient, HttpResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Matiere} from "../../shared/model/emploie.model";
import {SERVER_API_URL} from "../../app.constant";
import {Observable} from "rxjs";
type  EntityResponseType = HttpResponse<Matiere>;
type  EntityArrayResponseType = HttpResponse<Matiere[]>;

@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  public ressourceUrl = SERVER_API_URL + '/matiere';

  constructor(protected http: HttpClient) {
  }

  create(matiere: Matiere): Observable<EntityResponseType> {
    return this.http.post<Matiere>(this.ressourceUrl, matiere, {observe: 'response'});
  }

  update(matiere: Matiere): Observable<EntityResponseType> {
    return this.http.post<Matiere>(this.ressourceUrl, matiere, {observe: 'response'});
  }

  findAll(): Observable<EntityArrayResponseType> {
    return this.http.get<Matiere[]>(this.ressourceUrl, {observe: 'response'});
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(this.ressourceUrl+'/'+id, {observe: 'response'});
  }
}
