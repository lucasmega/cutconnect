export class Recurring {
    constructor(
        public aggregateUsage: string,
        public interval: string,
        public intervalCount: number,
        public trialPeriodDays: number,
        public usageType: string
    ) {}
  }
  