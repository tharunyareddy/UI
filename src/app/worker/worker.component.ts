import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Worker } from '../model/worker';
import { WorkerService } from '../services/worker.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {
  workers:Worker[];
  status = ["Availability","Not-Availability"]
  searchText:'';
  constructor(private workerService:WorkerService,private route:Router) { }

  ngOnInit(): void {
    this.workerService.getAllWorkers().subscribe(
      (workersList)=>{
        this.workers=workersList;
        console.log(workersList);
      },
      error =>console.log(error),
      ()=>console.log('completed')
    )
  }

  // onSearch =(worker:Worker)=>{
  //   this.route.navigate(['/contract-details',worker.workerId])
  // }
}
