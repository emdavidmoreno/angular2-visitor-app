import { Component, OnInit } from '@angular/core';
import { VisitorService } from '../services/visitor.service';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css'],
  providers: [VisitorService]
})
export class VisitorListComponent implements OnInit {
  visitors = [];

  constructor(private service: VisitorService) { }

  loadVisitors = () => {
    this.service.getAll().subscribe(data => {
      console.log(data);
      this.visitors = data
    })

  }

  ngOnInit() {
    this.loadVisitors();
  }

}
