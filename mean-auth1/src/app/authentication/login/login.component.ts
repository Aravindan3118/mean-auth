import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public commonService: CommonService,private notification:NotificationService,private router:Router) { }
  hide = true;
  ngOnInit() {
    this.commonService.loginForm.reset();
  }

  onSubmit(){
    console.log(this.commonService.loginForm.value);
    this.commonService.post('api/login',this.commonService.loginForm.value).subscribe((res) => {
      if (res) {
        console.log(res);
        
        this.notification.success('Login Success');
        localStorage.setItem('token', res['token']);
        this.router.navigate(['/home']);
      }
    },
    (err) => {
      this.notification.warn('Not Authorized');
    }
    )
  }
}
