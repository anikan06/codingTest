import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private table1DataSubject = new BehaviorSubject<any[]>([]);
  private table2DataSubject = new BehaviorSubject<any[]>([]);
  private expandedTable1Subject = new BehaviorSubject<boolean>(false);
  private expandedTable2Subject = new BehaviorSubject<boolean>(false);

  table1Data$ = this.table1DataSubject.asObservable();
  table2Data$ = this.table2DataSubject.asObservable();
  expandedTable1$ = this.expandedTable1Subject.asObservable();
  expandedTable2$ = this.expandedTable2Subject.asObservable();

  fruitsData = [
    { name: 'Apple', code: 'APL001', weight: '100g' },
    { name: 'Banana', code: 'BAN002', weight: '120g' },
    { name: 'Orange', code: 'ORG003', weight: '150g' },
    { name: 'Grapes', code: 'GRP004', weight: '200g' },
    { name: 'Strawberry', code: 'STB005', weight: '50g' },
    { name: 'Watermelon', code: 'WMN006', weight: '500g' },
    { name: 'Pineapple', code: 'PNP007', weight: '300g' },
    { name: 'Mango', code: 'MNG008', weight: '180g' }
  ];

  vegetablesData = [
    { name: 'Carrot', code: 'CRT001', weight: '80g' },
    { name: 'Broccoli', code: 'BRC002', weight: '70g' },
    { name: 'Tomato', code: 'TMT003', weight: '90g' },
    { name: 'Cucumber', code: 'CDC004', weight: '120g' },
    { name: 'Spinach', code: 'SPN005', weight: '50g' },
    { name: 'Bell Pepper', code: 'BPP006', weight: '100g' },
    { name: 'Lettuce', code: 'LTC007', weight: '60g' },
    { name: 'Onion', code: 'ONN008', weight: '70g' }
  ];

  loadfruitsData() {
    this.table1DataSubject.next(this.fruitsData);
    return this.table1Data$;
  }
  

  loadVegetablesData() {
    this.table2DataSubject.next(this.vegetablesData);
    return this.table2Data$;
  }

  expandFruits() {
    this.expandedTable1Subject.next(true);
  }

  expandVegetables() {
    this.expandedTable2Subject.next(true);
  }
  
}