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
    { srNo: 1, name: 'Apple', code: 'APL123', weight: '150g' },
    { srNo: 2, name: 'Banana', code: 'BAN456', weight: '120g' },
    { srNo: 3, name: 'Orange', code: 'ORG789', weight: '180g' },
    { srNo: 4, name: 'Grapes', code: 'GRP321', weight: '200g' },
    { srNo: 5, name: 'Pineapple', code: 'PIN654', weight: '250g' },
    { srNo: 6, name: 'Mango', code: 'MAN987', weight: '200g' },
    { srNo: 7, name: 'Strawberry', code: 'STB654', weight: '50g' },
    { srNo: 8, name: 'Watermelon', code: 'WMN321', weight: '500g' }
  ];

  vegetablesData = [
    { srNo: 1, name: 'Carrot', code: 'CRT789', weight: '200g' },
    { srNo: 2, name: 'Broccoli', code: 'BRC321', weight: '180g' },
    { srNo: 3, name: 'Spinach', code: 'SPN654', weight: '100g' },
    { srNo: 4, name: 'Potato', code: 'PTO987', weight: '300g' },
    { srNo: 5, name: 'Cucumber', code: 'CUC321', weight: '150g' },
    { srNo: 6, name: 'Tomato', code: 'TOM654', weight: '120g' },
    { srNo: 7, name: 'Onion', code: 'ONI987', weight: '80g' },
    { srNo: 8, name: 'Lettuce', code: 'LET321', weight: '50g' }
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