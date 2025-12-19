
export enum ComplianceStatus {
  PASSED = 'PASSED',
  FLAGGED = 'FLAGGED',
  BLOCKED = 'BLOCKED',
  PENDING = 'PENDING'
}

export interface GuardAuditLog {
  id: string;
  timestamp: string;
  action: string;
  source: string;
  status: ComplianceStatus;
  details: string;
  explainabilityScore: number;
}

export interface SecurityMetric {
  name: string;
  value: number;
  change: number;
  trend: 'up' | 'down' | 'stable';
}

export interface SDGAlignment {
  goal: string;
  score: number;
  color: string;
}

export interface AIResponse {
  decision: ComplianceStatus;
  routing: string;
  explanation: string;
  filteredPrompt: string;
  sdgImpact: string;
}
