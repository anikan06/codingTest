import { Component, Input } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.scss'
})
export class FruitsComponent {
  @Input() data: any[] | undefined;

  displayedColumns: string[] = ['srNo', 'name', 'code', 'weight'];

  constructor(
    private dataService: DataServiceService
  ) {}
  expandTable() {
    this.dataService.expandFruits();
  }

}
