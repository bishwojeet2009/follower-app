import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gethub-profile',
  templateUrl: './gethub-profile.component.html',
  styleUrls: ['./gethub-profile.component.css']
})
export class GethubProfileComponent implements OnInit {

  constructor(
    private router:Router,
    private route:ActivatedRoute) { }
  
  submit(){
    this.router.navigate(['/followers'],{
     queryParams:{page:1, order:"newest"}
    })
  }
  ngOnInit(): void {
    this.route.paramMap
    .subscribe(
        params =>{
          let id = params.get('id')
        console.log(id)
      }
    )
  }

}
