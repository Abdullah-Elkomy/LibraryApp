import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model : any = {}
  constructor(public accountService : AccountService, private toastr : ToastrService){
  }

  ngOnInit(): void {
  }


  login(){
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => {this.toastr.error(error.error)
      console.log(error)}
    })
  }

  logout(){
    this.accountService.logout();
  }
}
