import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Maintenance } from '../model/maintenance';
import { MaintenanceService } from '../services/maintenance.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  maintenances:Maintenance[]
  searchText='';
  status:any=['INPROGRESS','ONHOLD','COMPLETED'];
  priority:any=['HIGH','LOW','MIDDLE'];
  constructor(private maintenanceService:MaintenanceService,private route:Router) { }

  ngOnInit(): void {
    this.maintenanceService.getAllMaintenance().subscribe(
      (maintenancesList)=>{this.maintenances=maintenancesList
     // console.log(maintenancesList)
    },
      error =>console.log(error),
      ()=>console.log('completed')
    )
  }



}
