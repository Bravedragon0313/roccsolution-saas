import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-kit',
  templateUrl: './to-kit.component.html',
  styleUrls: ['./to-kit.component.scss']
})
export class ToKitComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  loadOverview() {
    this.router.navigateByUrl('/solution/overview');
  }
}
