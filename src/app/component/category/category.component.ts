import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/sevices/category.service';
 
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService : CategoryService ) {      }


      categoryList : any = [];
      ngOnInit() {
        this.getCategory();
        console.log(this.categoryList);
      }
    
      getCategory(){
        return this.categoryService.getCategory().subscribe(data  => {
          this.categoryList = data.result;
          console.log(data);
       
        });
      }

}
