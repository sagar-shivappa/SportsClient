export const environmentCommon = (config: any, api_key: any) => {
  return {
    is: 'dev',
    api_key: `${api_key}`,
    api: {
      registerPlayer: `${config}/player/register`,
      findPlayer: `${config}/player`,
      registerAdmin: `${config}/admin/register`,
      loginAdmin: `${config}/admin/login`,
    },
  };
};
