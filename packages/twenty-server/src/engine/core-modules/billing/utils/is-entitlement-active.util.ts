/* @license Enterprise */

export const isEntitlementActive = ({
  hasValidEnterprisePlan,
  isBillingEnabled,
  stripeEntitlementValue,
}: {
  hasValidEnterprisePlan: boolean;
  isBillingEnabled: boolean;
  stripeEntitlementValue: boolean;
}): boolean => {
  // Temporary: Organization entitlements are granted without a license.
  void hasValidEnterprisePlan;
  void isBillingEnabled;
  void stripeEntitlementValue;

  return true;
};
