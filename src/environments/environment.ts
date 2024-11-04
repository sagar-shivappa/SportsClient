import { environmentCommon } from '../environments/environment.common';

const host = 'https://devangasports.onrender.com';
const api_key = 'rzp_live_jbbbhKCqO19hMk';

export const environment = {
  ...environmentCommon(host, api_key),
};
