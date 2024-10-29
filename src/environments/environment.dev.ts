import { environmentCommon } from '../environments/environment.common';

const host = 'http://localhost:3001';
const api_key = 'rzp_test_fFPfAbmashyfLE';

export const environment = {
  ...environmentCommon(host, api_key),
};
