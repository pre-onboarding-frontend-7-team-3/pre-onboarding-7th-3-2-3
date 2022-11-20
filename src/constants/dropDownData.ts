import { handleTableDataToSelectData } from '../utils/processData';
import {
  BROKERS_FORMAT,
  IS_ACTIVE_FORMAT,
  STATUS_FORMAT,
  IS_STAFF_FORMAT,
} from './tableData';

export const DROPDOWN_DATA = [
  {
    id: 1,
    name: 'broker_id',
    data: handleTableDataToSelectData(BROKERS_FORMAT),
  },
  {
    id: 2,
    name: 'is_active',
    data: handleTableDataToSelectData(IS_ACTIVE_FORMAT),
  },
  {
    id: 3,
    name: 'status',
    data: handleTableDataToSelectData(STATUS_FORMAT),
  },
];

export const USER_DROPDOWN_DATA = [
  {
    id: 1,
    name: 'is_active',
    data: handleTableDataToSelectData(IS_ACTIVE_FORMAT),
  },
  {
    id: 2,
    name: 'is_staff',
    data: handleTableDataToSelectData(IS_STAFF_FORMAT),
  },
];
