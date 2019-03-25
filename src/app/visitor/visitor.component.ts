import { Component, OnInit, Input } from '@angular/core';
import { VisitorService } from '../services/visitor.service';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent implements OnInit {

  @Input() visitor: any;

  constructor(private service: VisitorService) { }

  checkOut(visitor){
    this.service.checkOut(visitor);
  }

  ngOnInit() {
    
  }

}
