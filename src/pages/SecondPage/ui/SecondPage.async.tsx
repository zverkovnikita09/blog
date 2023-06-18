import { lazy } from 'react';

export const AsyncSecondPage = lazy(async () => await import('./SecondPage'))