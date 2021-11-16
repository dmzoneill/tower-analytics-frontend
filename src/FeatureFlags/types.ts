export enum ValidFeatureFlags {
  moduleReports = 'moduleReports',
  newAutomationCalculator = 'newAutomationCalculator',
}

export interface FeatureFlagType {
  name: ValidFeatureFlags;
  enabled: boolean;
}

export interface ApiFeatureFlagReturnType {
  toggles?: FeatureFlagType[];
}
