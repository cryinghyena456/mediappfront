import { Component,OnInit } from '@angular/core';
import { Medi } from '../medi';
import { MediService } from '../medi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  medi:Medi[] = [];

  constructor(private mediser:MediService) { }

  ngOnInit(): void {
    this.medi = this.mediser.getAll();
  }
}
