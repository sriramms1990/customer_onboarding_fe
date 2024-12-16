import { StateCreator } from 'zustand';
import { AdminStore, FormComponent } from '../types/admin';

const initialState: AdminStore = {
  components: [
    { id: '1', name: 'Birth Date Form', currentPage: 2 },
    { id: '2', name: 'Address Form', currentPage: 3 },
  ],
  moveComponent: () => {},
  initializeComponents: () => {},
};

export const createAdminSlice: StateCreator<AdminStore> = (set) => ({
  ...initialState,
  moveComponent: (componentId: string, toPage: number) =>
    set((state) => ({
      components: state.components.map((component) =>
        component.id === componentId
          ? { ...component, currentPage: toPage }
          : component
      ),
    })),
  initializeComponents: (components: FormComponent[]) =>
    set({ components }),
});