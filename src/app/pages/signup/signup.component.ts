import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iauth } from 'src/app/model/auth';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: Iauth = {
    name: "",
    email: "",
    password: 0
   }
  constructor(
    private authService : AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.authService.addUser(this.user).subscribe(data => {
      alert(' thêm thành công')
      this.router.navigateByUrl('signin');
    })
}
}
