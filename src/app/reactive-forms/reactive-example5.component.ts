import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'reactive-example5',
  templateUrl: './reactive-example5.component.html',
  styleUrls: ['./reactive-example5.component.css']
})
export class ReactiveExample5Component implements OnInit {

  companyForm!: FormGroup;

  companyData!: Company;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.companyForm = this.fb.group({
      name: '',
      phoneNumber: '',
      emailAddress: '',
      address: this.fb.group({
        street: '',
        city: '',
        state: '',
        country: '',
      }),
      employees: this.fb.array([])
    });
  }

  patchForm(): void {
    this.companyForm.patchValue({
      name: this.companyData.name,
      phoneNumber: this.companyData.phoneNumber,
      emailAddress: this.companyData.emailAddress,
      address: this.companyForm.get('address')?.patchValue(this.companyData.address)
    });
    this.patchEmployees();
  }

  patchEmployees(): void {
    this.companyData.employees.map((employee) => {
      const skillsArray: FormArray =this.fb.array([]);
      employee.skills.map((skill) => {
        skillsArray.push(this.fb.group(skill));
      });
      const skillGroup: FormGroup = this.fb.group({
        ...employee,
        skills: skillsArray
      });
      this.employeeArray().push(skillGroup);
    });
  }

  employeeArray(): FormArray {
    return this.companyForm.get('employees') as FormArray;
  }

  initEmployee(): FormGroup {
    return this.fb.group({
      name: '',
      phoneNumber: '',
      emailAddress: '',
      skills: this.fb.array([]),
    });
  }

  addEmployee(): void {
    this.employeeArray().push(this.initEmployee());
  }

  removeEmployee(index: number): void {
    this.employeeArray().removeAt(index);
  }

  skillArray(index: number): FormArray {
    return this.employeeArray().at(index).get('skills') as FormArray;
  }

  initSkill(): FormGroup {
    return this.fb.group({
      name: '',
      level: '',
    });
  }

  addSkill(employeeIndex: number): void {
    this.skillArray(employeeIndex).push(this.initSkill());
  }

  removeSkill(employeeIndex: number, skillIndex: number): void {
    this.skillArray(employeeIndex).removeAt(skillIndex);
  }

  clearForm(): void {
    this.companyForm.reset();
  }

  onSubmit(): void {
    console.log('Form Submit: ', this.companyForm.value);
  }

  loadData(): void {
    this.companyData = {
      name: 'Ugam Solutions',
      emailAddress: 'info@ugamsolutions.com',
      phoneNumber: '+91-9876543210',
      address: {
        city: 'Mumbai',
        country: 'India',
        state: 'MH',
        street: '31st Floor, Sunshine Tower, Senapati Bapat Marg, Dadar (West)'
      },
      employees: [
        {
          empno: 1001,
          name: 'Tanveer',
          emailAddress: 'tanveer@gmail.com',
          phoneNumber: '+91-9876543210',
          skills: [
            {
              name: 'Java',
              level: 7
            },
            {
              name: '.NET',
              level: 6
            }
          ]
        },
        {
          empno: 1002,
          name: 'Swarada',
          emailAddress: 'swarada@gmail.com',
          phoneNumber: '+91-9876543210',
          skills: [
            {
              name: 'Angular',
              level: 7
            },
            {
              name: 'Python',
              level: 6
            }
          ]
        },
       ]
    };
  }
}

export interface Company {
  name: string;
  phoneNumber: string;
  emailAddress: string;
  address: Address | null;
  employees: Employee[];
}

export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
}

export interface Employee {
  empno: number;
  name: string;
  phoneNumber: string;
  emailAddress: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
}