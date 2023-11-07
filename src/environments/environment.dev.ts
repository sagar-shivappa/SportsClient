import { environmentCommon } from '../environments/environment.common';

const host = 'http://localhost:3001';

export const environment = {
  ...environmentCommon(host),
};
