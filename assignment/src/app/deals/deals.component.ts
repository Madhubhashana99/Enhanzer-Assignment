import { Component } from '@angular/core';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent {
  deals = [
    { size: 75000, category: 'Fitness Equipments', employee: 'dilshan', location: 'Purchasing', pipeline: 'eZuite Sales', stage: 'Product Demo', updated: '2020-12-08 04:33:11' },
    { size: 6000, category: 'Hardware company', employee: 'dilshan', location: 'Expire Location', pipeline: 'eZuite Sales', stage: 'Negotiations', updated: '2020-12-08 04:33:36' },
    { size: 45000, category: 'Hardware company', employee: 'dilshan', location: 'Expire Location', pipeline: 'eZuite Sales', stage: 'Qualified Lead', updated: '2020-12-08 04:34:09' },
    { size: 67800, category: 'Hardware company', employee: 'Avakeeshan', location: 'Purchasing', pipeline: 'eZuite Sales', stage: 'Negotiations', updated: '2020-12-08 04:34:37' },
    { size: 3000, category: 'Fitness Equipments', employee: 'dilshan', location: 'Purchasing', pipeline: 'eZuite Sales', stage: 'Leads', updated: '2020-12-08 04:36:05' },
    { size: 56700, category: 'Software company', employee: 'Avakeeshan', location: 'Colombo', pipeline: 'eZuite Sales', stage: 'Meeting', updated: '2020-12-08 04:35:22' },
    { size: 'test', category: 'Software company', employee: 'dilshan', location: 'Colombo', pipeline: 'eZuite Sales', stage: 'Pickme Food - Qualified with Criteria', updated: '2020-11-10 12:23:10' },
    { size: 1, category: 'Software company', employee: 'dilshan', location: 'Main Stock', pipeline: 'Development', stage: 'Research', updated: '2020-11-10 08:42:07' },
    { size: 1, category: 'Software company', employee: 'dilshan', location: 'Expire Location', pipeline: 'eZuite Sales', stage: 'Pickme Food - Qualified with Criteria', updated: '2020-11-09 06:27:30' },
    { size: 'test', category: 'Fitness Equipments', employee: 'Ruwin', location: 'Main Stock', pipeline: 'Quantum Pipeline', stage: 'Demo', updated: '2020-11-04 09:12:55' },
    { size: 200000, category: 'Fitness Equipments', employee: 'Chinthaka', location: 'Sales', pipeline: 'Quantum Pipeline', stage: 'Meeting', updated: '2020-11-04 05:45:33' },
    { size: 10500, category: 'Fitness Equipments', employee: 'Avakeeshan', location: 'Sales', pipeline: 'Quantum Pipeline', stage: 'Proposal', updated: '2020-11-04 05:20:25' },
    { size: 43000, category: 'Fitness Equipments', employee: 'Reshma', location: 'Sales', pipeline: 'Quantum Pipeline', stage: 'Proposal', updated: '2020-11-04 05:20:36' },
    { size: 75000, category: 'Fitness Equipments', employee: 'Akalanka', location: 'Rajagiriya', pipeline: 'Quantum Pipeline', stage: 'Lead', updated: '2020-11-04 05:23:26' },
    { size: 35000, category: 'Fitness Equipments', employee: 'Akalanka', location: 'Colombo', pipeline: 'Quantum Pipeline', stage: 'Negotiations', updated: '2020-11-04 05:23:02' },
    { size: 25000, category: 'Food Delivering', employee: 'Akalanka', location: 'Colombo', pipeline: 'Quantum Pipeline', stage: 'Negotiations', updated: '2020-11-04 05:20:52' },
    { size: 45000, category: 'Food Delivering', employee: 'Akalanka', location: 'Colombo', pipeline: 'Quantum Pipeline', stage: 'Lead', updated: '2020-11-04 05:18:03' },
    { size: 65000, category: 'Hardware company', employee: 'Deshan', location: 'Colombo', pipeline: 'Quantum Pipeline', stage: 'Lead', updated: '2020-11-04 05:16:58' },
    { size: 35000, category: 'Fitness Equipments', employee: 'Nishanth', location: 'Colombo', pipeline: 'Quantum Pipeline', stage: 'Demo', updated: '2020-11-04 05:16:34' },
  ];
}
