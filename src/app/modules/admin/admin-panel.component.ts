import { Component, OnInit } from '@angular/core';
import { OyunserService } from 'src/app/modules/oyunlar/services/oyunser.service';
import { MatDialog } from '@angular/material';
import { OyunComponent } from 'src/app/modules/oyunlar/components/oyun/oyun.component';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  courses:any[];
  displayedColumns: string[] = ['title', 'description','categorie','urlImage','price','actions'];
  constructor(private serviceCourse:OyunserService,private serviceDialog: MatDialog) { }

  ngOnInit() {
    this.serviceCourse.getAllCourses()
                      .subscribe(courses=>this.courses=courses)


                    
  }
  AddCourse()
  {
    this.serviceDialog.open(OyunComponent,{
      width:'650px'
    })

  }
  Edit(row)
  {
    this.serviceDialog.open(OyunComponent,{
      width:'650px', data:{id:row.key}
    })
  }
  Delete(row)
  {
    if(window.confirm('Are sure you want to delete this course ?')) this.serviceCourse.deleteCourse(row.key);

  }

}
