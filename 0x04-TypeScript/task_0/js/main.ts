interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
  }
  
  const student1: Student = {
    firstName: 'mohamed',
    lastName: 'hefny',
    age: 24,
    location: 'egypt'
  }
  
  const student2: Student = {
    firstName: 'ahmed',
    lastName: 'hefny',
    age: 26,
    location: 'cairo'
  }
  
  const studentList: Array<Student> = [student1, student2];
  
  const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
  const table: HTMLTableElement = document.createElement('table');
  const thead: HTMLTableSectionElement = document.createElement('thead');
  const the1: HTMLTableCellElement = document.createElement('th');
  const the2: HTMLTableCellElement = document.createElement('th');
  
  the1.innerText = 'First Name';
  the2.innerText = 'Location';
  the1.style.border = '1px solid gray';
  the2.style.border = '1px solid gray';
  the1.style.padding = '.5rem';
  the2.style.padding = '.5rem';
  table.style.border = '1px solid gray';
  table.style.borderCollapse = 'collapse';
  
  
  
  thead.append(the1);
  thead.append(the2);
  
  table.append(thead);
  
  
  studentList.forEach((student) => {
    const r: HTMLTableRowElement = document.createElement('tr');
  
    const c1: HTMLTableCellElement = document.createElement('td');
    const c2: HTMLTableCellElement = document.createElement('td');
  
    c1.innerText = student.firstName;
    c2.innerText = student.lastName;
  
    c1.style.border = '1px solid gray';
    c2.style.border = '1px solid gray';
    c1.style.padding = '.5rem';
    c2.style.padding = '.5rem';
  
    r.append(c1);
    r.append(c2)
  
    table.append(r);
  });
  
  body.append(table)