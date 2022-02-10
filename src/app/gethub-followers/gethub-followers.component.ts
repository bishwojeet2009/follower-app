import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from '../services/github-followers.service';
import { combineLatest } from 'rxjs';
import { switchMap,map } from 'rxjs/operators';

@Component({
  selector: 'app-gethub-followers',
  templateUrl: './gethub-followers.component.html',
  styleUrls: ['./gethub-followers.component.css']
})
export class GethubFollowersComponent implements OnInit {
  followers: any;

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit(): void {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).pipe(
      switchMap((combinelatest:any) => {
        let id =  combinelatest[0].get('id')
        let page =  combinelatest[1].get('page')
   
        return this.service.getAll()
       })).subscribe(followers => this.followers = followers)

    
    
  }

}
