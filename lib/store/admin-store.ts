import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AdminStore, FormComponent } from './types/admin';

const FORM_COMPONENTS: FormComponent[] = [
  { id: 'about-me', name: 'About Me', type: 'form', page: 2 },
  { id: 'personal-info', name: 'Personal Info', type: 'form', page: 2 },
  { id: 'contact-info', name: 'Contact Info', type: 'form', page: 3 },
];

const DEFAULT_CONFIG = {
  components: FORM_COMPONENTS,
  currentConfig: {
    page2Components: ['about-me', 'personal-info'],
    page3Components: ['contact-info'],
  },
};

export const useAdminStore = create<AdminStore>()(
  persist(
    (set) => ({
      ...DEFAULT_CONFIG,
      moveComponent: (componentId: string, toPage: number) =>
        set((state) => {
          // Create updated component list
          const updatedComponents = state.components.map((component) =>
            component.id === componentId ? { ...component, page: toPage } : component
          );

          // Update page configurations
          const page2Components = updatedComponents
            .filter((c) => c.page === 2)
            .map((c) => c.id);
          const page3Components = updatedComponents
            .filter((c) => c.page === 3)
            .map((c) => c.id);

          // Validate: each page must have at least one component
          if (page2Components.length === 0 || page3Components.length === 0) {
            return state;
          }

          return {
            components: updatedComponents,
            currentConfig: {
              page2Components,
              page3Components,
            },
          };
        }),
      resetConfig: () => set(DEFAULT_CONFIG),
    }),
    {
      name: 'admin-config',
    }
  )
);