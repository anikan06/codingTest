import { Component, OnDestroy } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnDestroy {
  constructor(private dataService: DataServiceService) {}
  fruitsData: any;
  vegetablesData: any;
  showTable1 = false;
  showTable2 = false;
  unsubscribe$: Subject<void> = new Subject()

  toggleTable1() {
    this.showTable1 = !this.showTable1;
  }

  toggleTable2() {
    this.showTable2 = !this.showTable2;
  }

  loadData1() {
    this.dataService.loadfruitsData()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((res: any) => {
      this.fruitsData = res;
    });
    this.showTable1= true;
  }

  loadData2() {
    this.dataService.loadVegetablesData()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((res: any) => {
      this.vegetablesData = res;
    });
    this.showTable2 = true;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
