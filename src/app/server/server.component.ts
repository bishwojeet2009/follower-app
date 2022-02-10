import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app.error';
import { BadInput } from '../common/bad.input';
import { NotFoundError } from '../common/notfound.error';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  posts:any;

  constructor( private service: PostService) {
    
   }
   createPost(input:any){
     let post = {title: input.value};
     this.service.createAll(post)     
     .subscribe(post => console.log(post),
               (error: AppError) =>{
               if(error instanceof BadInput){
                //  this.form.setErrors(error);
               }
              else throw error
      
            }
          )
      input.value = "";
      this.posts.unshift(post)

   }

   onUpdate(post:any){
     this.service.update(post)     
     .subscribe(post =>console.log(post))
   }
   onDelete(post:any){
      let index = this.posts.indexOf(post)
      this.posts.splice(index,1)
     this.service.delete(post)
     .subscribe(null ,
       (error:AppError) =>{
         this.posts.splice(index,0,post)
         if(error instanceof NotFoundError){
           alert('This post has already been Deleted')
         }
         else throw error
     })
   }
   ngOnInit(): void {
    this.service.getAll()
    .subscribe(post =>this.posts=post)       
   }
  
  }
