import { Component, OnInit } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  // Show Compare Menu
  compareMenu(): boolean {
    $('.compare-menu').addClass('show');
    return false;
  };

  // Compare Button
  compareNow() {
    var itemLength = document.getElementsByClassName('selected').length;
    if(itemLength >= 2) {
        $('.spinner').fadeIn();
    } else {
      return false;
    }
  };
  // Dismiss Compare Menu
  dismissCompareMenu() {
    $('.compare-menu').removeClass('show');
  }

  ngOnInit() {
    // Add class selected to items
    $('.compare-menu li').on('click', function() {
      // Show the number of selected items
      var itemLength = document.getElementsByClassName('selected').length;
      if(itemLength < 2) {
        $(this).toggleClass('selected');
      } else {
        $(this).removeClass('selected');
      }
    });

  }

}
