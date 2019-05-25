import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material';

declare var $;
@Component({
  selector: 'app-driver-dashboard',
  templateUrl: './driver-dashboard.component.html',
  styleUrls: ['./driver-dashboard.component.css']
})
export class DriverDashboardComponent implements OnInit {

  data : any;
  tempData: any;
  renderedData:any;
  dataSource: MatTableDataSource<{}>;
  constructor(private http: HttpClient) {
    this.dataSource = new MatTableDataSource(this.data);
this.dataSource.connect().subscribe(d => this.renderedData = d);
   }

  ngOnInit() {
    this.http.get('http://localhost:3000/drivers').subscribe((res :any)=>{
      this.data = res;
      $(document).ready(function() {
        $('#datTab').DataTable( {
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
            ]
        } );
    } );
    })

}
// exportCsv(){
//   new Angular5Csv(this.data,'Test Report');
//   }

  book(val){
    console.log(val);
 this.tempData = val;
this.tempData.availability = "No";
console.log(this.tempData);
this.http.put('http://localhost:3000/drivers'+ '/' + this.tempData.id, this.tempData).subscribe((res:any)=>{
   alert('Successfully booked');
})
  }

}
