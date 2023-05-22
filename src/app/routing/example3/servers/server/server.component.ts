import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    console.log("inside my servercomponent..");
    console.log(this.route.snapshot.fragment);
    let allowEdit = this.route.snapshot.queryParams['allowEdit'];
    console.log(allowEdit);
    this.route.queryParams.subscribe((params: Params) => {
      allowEdit = params['allowEdit'];
      console.log(allowEdit);
    })

    let id = +this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      id = +params['id'];
      this.server = this.serversService.getServer(id);
    })
    this.server = this.serversService.getServer(id);
  }

  editServer() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
