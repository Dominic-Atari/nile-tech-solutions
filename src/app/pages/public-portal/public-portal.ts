import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CivicDashboard } from '../../shared/civic-dashboard/civic-dashboard';

interface RegionBar {
  name: string;
  value: number;
  stations: string;
  status: 'Reporting' | 'Updating' | 'Delayed';
}

interface Announcement {
  date: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-public-portal',
  imports: [CivicDashboard, RouterLink],
  templateUrl: './public-portal.html',
  styleUrl: './public-portal.scss',
})
export class PublicPortal {
  protected readonly selectedRegion = signal('Central Equatoria');

  protected readonly regionBars: readonly RegionBar[] = [
    { name: 'Central Equatoria', value: 64, stations: '482 / 491 stations', status: 'Reporting' },
    { name: 'Western Equatoria', value: 58, stations: '196 / 221 stations', status: 'Reporting' },
    { name: 'Jonglei', value: 47, stations: '241 / 309 stations', status: 'Updating' },
    { name: 'Upper Nile', value: 42, stations: '190 / 276 stations', status: 'Delayed' },
    { name: 'Western Bahr el Ghazal', value: 53, stations: '165 / 188 stations', status: 'Reporting' },
  ];

  protected readonly announcements: readonly Announcement[] = [
    { date: '08 Aug 2026', title: 'Polling stations remain open until 17:00 CAT', category: 'Public notice' },
    { date: '07 Aug 2026', title: 'How to check your assigned polling station', category: 'Guide' },
    { date: '05 Aug 2026', title: 'Accessibility support is available at every county hub', category: 'Service update' },
  ];

  protected readonly publicBars = [
    { label: 'Verified registrations', value: 88 },
    { label: 'Stations reporting', value: 86 },
    { label: 'Turnout received', value: 56 },
    { label: 'Results reviewed', value: 41 },
  ];

  protected setRegion(region: string): void {
    this.selectedRegion.set(region);
  }
}
