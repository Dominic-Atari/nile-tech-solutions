import { Component, signal } from '@angular/core';
import { CivicDashboard } from '../../shared/civic-dashboard/civic-dashboard';

type ScanState = 'ready' | 'scanning' | 'verified';

interface TurnoutPoint {
  hour: string;
  value: number;
  voters: number;
}

interface StationActivity {
  time: string;
  event: string;
  reference: string;
  status: 'Verified' | 'Recorded' | 'Review';
}

@Component({
  selector: 'app-poll-station',
  imports: [CivicDashboard],
  templateUrl: './poll-station.html',
  styleUrl: './poll-station.scss',
})
export class PollStation {
  protected readonly scanState = signal<ScanState>('ready');
  protected readonly voteRecorded = signal(false);
  protected readonly ballotsCast = signal(136);

  protected readonly turnout: readonly TurnoutPoint[] = [
    { hour: '08:00', value: 24, voters: 18 },
    { hour: '09:00', value: 38, voters: 32 },
    { hour: '10:00', value: 51, voters: 44 },
    { hour: '11:00', value: 68, voters: 61 },
    { hour: '12:00', value: 79, voters: 75 },
    { hour: '13:00', value: 63, voters: 54 },
    { hour: '14:00', value: 86, voters: 72 },
  ];

  protected readonly activity: readonly StationActivity[] = [
    { time: '14:29:08', event: 'Ballot recorded', reference: 'PS-00418', status: 'Recorded' },
    { time: '14:27:41', event: 'Voter verified', reference: 'PS-00417', status: 'Verified' },
    { time: '14:25:16', event: 'Voter verified', reference: 'PS-00416', status: 'Verified' },
    { time: '14:21:52', event: 'Manual review requested', reference: 'PS-00415', status: 'Review' },
  ];

  protected scanStatus(): string {
    switch (this.scanState()) {
      case 'scanning':
        return 'Reading fingerprint pattern';
      case 'verified':
        return 'Voter identity verified';
      default:
        return 'Scanner ready for next voter';
    }
  }

  protected runScan(): void {
    if (this.scanState() === 'scanning') {
      return;
    }

    this.voteRecorded.set(false);
    this.scanState.set('scanning');
    window.setTimeout(() => this.scanState.set('verified'), 1400);
  }

  protected recordDemoVote(): void {
    if (this.scanState() !== 'verified' || this.voteRecorded()) {
      return;
    }

    this.ballotsCast.update((count) => count + 1);
    this.voteRecorded.set(true);
  }

  protected resetScanner(): void {
    this.scanState.set('ready');
    this.voteRecorded.set(false);
  }
}
