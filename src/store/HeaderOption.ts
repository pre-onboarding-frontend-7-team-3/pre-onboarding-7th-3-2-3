import { atom } from 'recoil';

export const headerOptionState = atom({
  key: 'HeaderOption',
  default: { firstOption: null, secondOption: null, thirdOption: null },
});

// broker_id , status(계좌싱태여부), is_active(계좌활성화 여부)
