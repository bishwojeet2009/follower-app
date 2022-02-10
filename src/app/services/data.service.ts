import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError,map } from 'rxjs/operators';
import { observable, throwError } from 'rxjs';
import { AppError } from '../common/app.error';
import { NotFoundError } from '../common/notfound.error';
import { BadInput } from '../common/bad.input';
@Injectable()
export class DataService {
  constructor(@Inject(String) private url:string, private http: HttpClient) { 

  }
  getAll(){
    return this.http.get(this.url)
    .pipe(
      map(response =>response),
      catchError( (this.errorhandler)))
  }
  createAll(resource:any){
    return this.http.post(this.url,JSON.stringify(resource))
    .pipe(
      map(response =>response),
      catchError((this.errorhandler))
    )
  }
  update(resource:any){
    return this.http.patch(this.url + "/"+ resource.id,JSON.stringify({isRed: true}) )
    .pipe(
      map(response =>response),
      catchError( (this.errorhandler)))
  }
  delete(id:any){
    return this.http.delete(this.url+ '/'+ id)
    .pipe(
      map(response =>response),
      catchError( (this.errorhandler)))
    }

  private errorhandler(error:any){
      if(error.status === 404){
        return throwError( new NotFoundError())
      }
      if(error.status ===400){
        return throwError(new BadInput(error))
      }
      return throwError( new AppError(error))
      
    }
  
}
