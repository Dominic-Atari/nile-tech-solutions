import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CivicDashboard } from '../../shared/civic-dashboard/civic-dashboard';

interface ServiceItem {
  title: string;
  description: string;
  status: 'Complete' | 'Available' | 'Pending';
  icon: 'card' | 'poll' | 'document';
}

@Component({
  selector: 'app-citizen',
  imports: [CivicDashboard, RouterLink],
  templateUrl: './citizen.html',
  styleUrl: './citizen.scss',
})
export class Citizen {
  protected readonly selectedService = signal('Voter registration');

  protected readonly services: readonly ServiceItem[] = [
    {
      title: 'Voter registration',
      description: 'Review your registration details and assigned polling station.',
      status: 'Complete',
      icon: 'card',
    },
    {
      title: 'Find polling station',
      description: 'Get directions, opening hours, and station accessibility information.',
      status: 'Available',
      icon: 'poll',
    },
    {
      title: 'Documents and requests',
      description: 'Track public service requests and download official documents.',
      status: 'Pending',
      icon: 'document',
    },
  ];

  protected chooseService(title: string): void {
    this.selectedService.set(title);
  }
}
