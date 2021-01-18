import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategorieService } from 'src/app/modules/services/categorie.service';
import { OyunserService } from '../../services/oyunser.service';
import { Oyun } from '../../models/oyunmod.model';
import { MatDialogRef, MAT_DIALOG_DATA, MatInputModule } from '@angular/material';
import {mergeMap,map} from 'rxjs/operators';
import { R3ResolvedDependencyType } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-oyun',
  templateUrl: './oyun.component.html',
  styleUrls: ['./oyun.component.css']
})
export class OyunComponent implements OnInit {
  regiForm:FormGroup;
  categories:any[];
  course:Oyun;
  constructor(private fb:FormBuilder,private serviceCategorie:CategorieService,
    private serviceCourse:OyunserService,
    public dialogRef: MatDialogRef<OyunComponent>,
    @Inject(MAT_DIALOG_DATA) public idCourse
    ) { 
   
 
  }

  ngOnInit() {
    if(!this.idCourse)
    {
    this.serviceCategorie.getAllCategories()
                         .subscribe(categories=>{
                           this.categories=categories;
                           this.initalizeCourse(null);
                          });
    }
    else
    {
      this.serviceCategorie.getAllCategories()
                           .pipe(
                             mergeMap(categories=>this.serviceCourse.getCoursebyId(this.idCourse.id).pipe(
                              map(course=>{
                                return ([categories,course])
                              })
                             ))).subscribe(([categories,course])=>{
                                 this.categories=categories as any[];
                                 this.course=course as Oyun;
                                 this.initalizeCourse(course);
                             })
                        
                           
     
    } 
  }
  initalizeCourse(course)
  {
    this.regiForm = this.fb.group({  
      'Title' : [ course?course.title:null,Validators.required],  
      'Description' : [course?course.description:null, Validators.required],  
      'Price' : [ course?course.price:null,Validators.required],  
      'UrlImage' : [ course?course.urlImage:null,Validators.required],  
      'Categorie':[ course?course.categorie:null,Validators.required]
    });

  }

  onSubmit(form)
  {
    console.log(form);
    if(this.regiForm.valid)
    {
      let course:Oyun={
        id:this.idCourse?this.idCourse.id:'',
        title:form.Title,
        description:form.Description,
        categorie:form.Categorie,
        price:form.Price,
        urlImage:form.UrlImage
      }
       if(!this.idCourse)
       {
      this.serviceCourse.AddCourse(course).then(()=>{
        this.dialogRef.close();
      });
      }
      else
      {
        this.serviceCourse.updateCourse(course).then(()=>{
          this.dialogRef.close();
        });
      }
     
     }

    

  }
}
