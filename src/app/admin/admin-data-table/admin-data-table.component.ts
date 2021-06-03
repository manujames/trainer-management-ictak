import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/content.service';
// import * as $ from 'jquery'

@Component({
  selector: 'app-admin-data-table',
  templateUrl: './admin-data-table.component.html',
  styleUrls: ['./admin-data-table.component.css']
})
export class AdminDataTableComponent implements OnInit {

  trainers:any;
  constructor(private content:ContentService, private router:Router) { }

  ngOnInit(): void {
    this.content.getAllTrainers()
    .subscribe(
      data=>{
        this.trainers = data;
      },
      error=>{
        if(error.status == 403){
          this.router.navigate(['/trainer'])
        }
        else{
          console.log(error);
          alert("Sorry, Something went wrong, pleast try later");
        }
      }
    );
  }
  

  searchFn(col: any, field:any) {
    // Declare variables
    let input:any, filter, table:any, tr, td, i, txtValue;
    console.log(col,field);
    input = document.getElementById(field);
    filter = input.value.toUpperCase();
    table = document.getElementById("trainerTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[col];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        }
        else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  clearFilters(){
    let filterElements:any = document.getElementsByClassName("tableFilter");
    for(let i=0;i<filterElements.length;i++){
      filterElements[i].value='';
    }
    // $('.tableFilter').val('');
  }

}
