import { createAction } from '@reduxjs/toolkit'

export const setCachedData = createAction('SET_CACHED_DATA', payload => ({ payload }));

