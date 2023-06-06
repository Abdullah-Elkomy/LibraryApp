import { Component } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
model:any ={};

constructor(private accountService: AccountService){

}
register(){
  this.accountService.register(this.model).subscribe({
    next: res => {
      console.log(res)
    },
    error : err => {
      console.log(err)
    }
  })
}
cancel(){
  console.log('canceled')
}
}
