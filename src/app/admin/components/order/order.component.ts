import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {


    this.spinner.show("s3");

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide("s3");
    }, 5000);
  }

}
