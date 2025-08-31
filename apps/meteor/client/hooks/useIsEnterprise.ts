export const useIsEnterprise = (): { data: { isEnterprise: boolean }, isLoading: boolean } => {
  return {
    data: { isEnterprise: true },
    isLoading: false,
  };
};