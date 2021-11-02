import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  private _baseurl="http://localhost:8073/work-service"

  constructor(private _http:HttpClient) { }

  getAllWorkers():Observable<Worker[]>{
    let url=this._baseurl+"/work"
    return this._http.get<Worker[]>(url);
  }

  getById(workerId:number):Observable<Worker>{
    let url=this._baseurl+"/work/"+workerId;
    return this._http.get<Worker>(url);
  }

  // getByContractName(contractName:string):Observable<Worker[]>{
  // let url= this._baseurl+"/contracts/contractName/"+contractName;
  //   return this._http.get<Worker[]>(url);
  // }
}