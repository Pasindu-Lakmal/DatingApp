import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  login() {
    this.accountService.login(this.model).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigateByUrl('/members');
      },
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

  //we no need this becase we get current user dirrectly from account service
  // getCurrentUser() {
  //   this.accountService.currentUser$.subscribe({
  //     next: (user) => {
  //       this.loggedIn = !!user;
  //     },
  //     error: (error) => console.log(error),
  //   });
  // }
}
