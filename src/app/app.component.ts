import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MATMENU';

  constructor() {}

  matArray: any = [];
  menuData = [
    {
      id: 'create',
      name: 'Create',
      value: 'creation of student and employee',
      children: [
        {
          name: 'Student',
          value: 'aman',
          disabled: true,
        },

        {
          name: 'Employee',
          value: 'creation of employee',
          // disabled: true,

          children: [
            {
              name: 'Employee Id',
              value: '101',

              children: [
                {
                  name: 'Employee Name',
                  value: 'Dhanashri1',
                },
              ],
            },

            {
              name: 'Employee Name',
              value: 'Dhanashri',
            },
          ],
        },
        {
          name: 'Doctor',
          value: 'creation of doctor',
        },
      ],
    },
    {
      name: 'Update',
      value: 'updation of student,employee and doctor',
    },
    {
      name: 'Delete',
      value: 'deletion of student,employee and doctor',
    },
  ];

  parentData(evt: any) {
    console.log(evt);
  }
}
