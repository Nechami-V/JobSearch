import { Component, ViewChild } from '@angular/core';
import { filter } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router,private userService:UserService) {
  }
  
  @ViewChild ('f') f: any

  inputName:string = ''
  inputPassword:string = ''

  submitlogin():void{
    if(this.inputPassword.length<8||this.inputPassword.includes(' ')){
      alert("סיסמה לא חוקית")
    }
    else{
      this.userService.getUser(this.inputName,this.inputPassword).subscribe(u=>{
        if(u!=null){
          localStorage.setItem("user",JSON.stringify(u));
          this.router.navigate(['alljobs'])
        }
        else
        alert('משתמש לא קיים')
      })
    }
  }
 
}
