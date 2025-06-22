import { useEffect, useLayoutEffect } from 'react';

/**
 * 클라이언트에서는 `useLayoutEffect`를, 서버에서는 `useEffect`를 리턴하는 Effect Hook
 */
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;
