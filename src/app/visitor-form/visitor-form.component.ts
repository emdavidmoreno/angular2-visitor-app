import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { VisitorService } from '../services/visitor.service';

@Component({
  selector: 'app-visitor-form',
  templateUrl: './visitor-form.component.html',
  styleUrls: ['./visitor-form.component.css']
})
export class VisitorFormComponent implements OnInit {

  @Input() visitorForm: FormGroup;
  private isFormOpen;
  constructor(private service: VisitorService ) {}

  /**
   * addVisitor
   */
  public createVisitor() {
    const newVisitor = {
      ...this.visitorForm.value,
      arrived_time: new Date().toLocaleTimeString(),
      exit_time: ''
    }
    this.service.addVisitor(newVisitor);
    this.visitorForm.reset();
  }

  public cancelAndClose() {
    this.isFormOpen = false;
    this.visitorForm.reset();
  }

  public addVisitor() {
    this.isFormOpen = true;
  }


  ngOnInit() {
    this.visitorForm = new FormGroup({
      name: new FormControl(),
      company: new FormControl(),
      arrived_time: new FormControl(),
      exit_time: new FormControl(),
    })
    this.isFormOpen = false;
  }

}
