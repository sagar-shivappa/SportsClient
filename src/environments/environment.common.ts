export const environmentCommon = (config: any) => {
  return {
    is: 'dev',
    api: {
      registerPlayer: `${config}/player/register`,
      findPlayer: `${config}/player`,
      registerAdmin: `${config}/admin/register`,
      loginAdmin: `${config}/admin/login`,
    },
  };
};
