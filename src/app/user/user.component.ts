import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#register-form').hide();
    $('.main-c .forms-nav li').on('click', function () {
      $($(this).data('form')).fadeIn(1000).siblings().hide();
      $(this).addClass('active').siblings().removeClass('active');
    });
  }

}
