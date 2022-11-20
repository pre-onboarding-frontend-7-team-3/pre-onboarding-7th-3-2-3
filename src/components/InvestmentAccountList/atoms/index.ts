import { atomWithHash } from 'jotai/utils';

export const accountQueryParamsAtom = atomWithHash('accountQueryParamsAtom', {
  pageNum: 1,
  q: '',
});
