import { Component, OnInit,Input} from '@angular/core';
import { Employee } from '../employee';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  powers = ['Smart Coder', 'Super Flexible',
    'Logical Thinker', 'Excellent Analyst'];
  // model = new Employee(18, 'James Gosling', this.powers[0], 'Chuck Overstreet');
  model = new Employee(18, '', '', '');
  submitted = false;

  onSubmit() { 
    this.submitted = true;
   
}

  constructor() { }

  ngOnInit(): void {
  }

}
