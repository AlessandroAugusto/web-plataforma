import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  desenvolvimento = !environment.production;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log();
  }

}
