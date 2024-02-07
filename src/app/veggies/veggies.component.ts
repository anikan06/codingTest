import { Component, Input } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-veggies',
  templateUrl: './veggies.component.html',
  styleUrl: './veggies.component.scss'
})
export class VeggiesComponent {
  @Input() data: any[] | undefined;

  displayedColumns: string[] = ['name', 'code', 'weight'];

  constructor(
    private dataService: DataServiceService
  ) {}
  
  expandTable() {
    this.dataService.expandFruits();
  }
}
