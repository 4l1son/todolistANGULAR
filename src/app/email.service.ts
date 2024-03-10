import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  generateXLS(tasks: string[]) {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(tasks.map(task => ({ task })));
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Tarefas');
    XLSX.writeFile(workbook, 'tarefas.xlsx');
  }
}
