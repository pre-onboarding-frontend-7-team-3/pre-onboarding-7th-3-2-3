import { atomWithHash } from "jotai/utils";

export const userQueryParamsAtom = atomWithHash("accountQueryParamsAtom", {
  pageNum: 1,
});
