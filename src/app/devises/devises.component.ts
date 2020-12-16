import { Component, OnInit } from '@angular/core';
import { DevisesService } from '../devises.service';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-devises',
  templateUrl: './devises.component.html',
  providers:[DevisesService],
  styleUrls: ['./devises.component.css']
})
export class DevisesComponent implements OnInit {


  constructor() { }

  ngOnInit(): void { }

}




