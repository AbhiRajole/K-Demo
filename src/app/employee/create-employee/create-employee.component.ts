import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      fullName : ['', Validators.required],
      email : [''],
      skills :this.fb.group({
        skillName : [''],
        experienceInYear : [''],
        proficiency :['advanced']
      })

    })
  }

  onLoadData(): void{
    this.employeeForm.patchValue({
      fullName: 'abhishek',
      email : 'abhi@gmail.com',
      skills: {
        skillName : 'angular',
        experienceInYear : 2,
        proficiency : 'beginner'
      }
    })

  }

  OnSubmit(): void
  {
    console.log(this.employeeForm);
  }

}
