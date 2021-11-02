import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Maintenance } from '../model/maintenance';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  private _baseurl="http://localhost:9000/contractor-service/contracts"

  constructor(private _http:HttpClient) { }

  getAllMaintenance():Observable<Maintenance[]>{
    let url=this._baseurl+"/maintenance"
    return this._http.get<Maintenance[]>(url);
  }
}
