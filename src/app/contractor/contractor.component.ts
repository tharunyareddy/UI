import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contract } from '../model/contract';
import { ContractorService } from '../services/contractor.service';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.css']
})
export class ContractorComponent implements OnInit {
 
  contracts:Contract[];

  searchText='';
  // status:any=['INPROGRESS','ONHOLD','COMPLETED'];
  priority:any=['HIGH','LOW','MIDDLE'];

checkedArray:any=[
  {
  id: 1,
  type:"checkbox",
  status:"Availability"
  },
 {
  id: 2,
  type:"checkbox",
  status:"Not-Availability",
 }
] ;

  constructor(private contractorService:ContractorService,private route:Router) { }

  ngOnInit(): void {
    this.contractorService.getAllContracts().subscribe(
      (contractsList)=>{
        this.contracts=contractsList;
        console.log(contractsList);
      },
      error =>console.log(error),
      ()=>console.log('completed')
    )
  }

  onSearch =(contract:Contract)=>{
    this.route.navigate(['/contract-details',contract.contractId])
  }
}
