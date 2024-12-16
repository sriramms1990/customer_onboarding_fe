import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AdminStore } from './types/admin';
import { createAdminSlice } from './slices/admin-slice';

export const useAdminStore = create<AdminStore>()(
  persist(createAdminSlice, {
    name: 'admin-storage',
  })
);