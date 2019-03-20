import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public commonService:CommonService, private notification:NotificationService, private router:Router) { }

  ngOnInit() {
    this.commonService.registerForm.reset();
  }

  onSubmit(){
    console.log(this.commonService.registerForm.value);
    this.commonService.post('api/register',this.commonService.registerForm.value).subscribe((res) => {
      if(res['is_success'] == true){
        console.log(res);
        this.commonService.registerForm.reset();
        this.notification.success('Registered Successfully');
        this.router.navigate(['auth/login']);
      }
      else{
        this.notification.warn(res);
      }
    })
  }
}
