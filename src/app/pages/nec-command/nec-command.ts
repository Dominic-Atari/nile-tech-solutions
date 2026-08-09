import { Component, signal } from '@angular/core';
import { CivicDashboard } from '../../shared/civic-dashboard/civic-dashboard';

type RegionStatus = 'Stable' | 'Watch' | 'Attention';

interface RegionRow {
  name: string;
  stations: number;
  reporting: number;
  turnout: number;
  status: RegionStatus;
}

interface IncidentRow {
  id: string;
  region: string;
  issue: string;
  owner: string;
  age: string;
  priority: 'Low' | 'Medium' | 'High';
}

@Component({
  selector: 'app-nec-command',
  imports: [CivicDashboard],
  templateUrl: './nec-command.html',
  styleUrl: './nec-command.scss',
})
export class NecCommand {
  protected readonly regionFilter = signal('All regions');

  protected readonly regions: readonly RegionRow[] = [
    { name: 'Central Equatoria', stations: 482, reporting: 98, turnout: 64, status: 'Stable' },
    { name: 'Western Equatoria', stations: 221, reporting: 91, turnout: 58, status: 'Stable' },
    { name: 'Jonglei', stations: 309, reporting: 78, turnout: 47, status: 'Watch' },
    { name: 'Upper Nile', stations: 276, reporting: 69, turnout: 42, status: 'Attention' },
    { name: 'Western Bahr el Ghazal', stations: 188, reporting: 88, turnout: 53, status: 'Stable' },
  ];

  protected readonly incidents: readonly IncidentRow[] = [
    { id: 'INC-0091', region: 'Upper Nile', issue: 'Device sync delay', owner: 'Field team 04', age: '12m', priority: 'High' },
    { id: 'INC-0090', region: 'Jonglei', issue: 'Queue threshold reached', owner: 'Field team 02', age: '27m', priority: 'Medium' },
    { id: 'INC-0089', region: 'Central Equatoria', issue: 'Paper register review', owner: 'Station PS-118', age: '41m', priority: 'Low' },
    { id: 'INC-0088', region: 'Western Equatoria', issue: 'Connectivity restored', owner: 'Field team 08', age: '1h', priority: 'Low' },
  ];

  protected readonly filters = ['All regions', 'Central Equatoria', 'Jonglei', 'Upper Nile'];

  protected setRegionFilter(region: string): void {
    this.regionFilter.set(region);
  }

  protected visibleRegions(): readonly RegionRow[] {
    const filter = this.regionFilter();
    return filter === 'All regions' ? this.regions : this.regions.filter((region) => region.name === filter);
  }
}
