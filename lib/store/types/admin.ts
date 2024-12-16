export interface FormComponent {
  id: string;
  name: string;
  type: 'form';
  page: number;
}

export interface AdminState {
  components: FormComponent[];
  currentConfig: {
    page2Components: string[];
    page3Components: string[];
  };
}

export interface AdminActions {
  moveComponent: (componentId: string, toPage: number) => void;
  resetConfig: () => void;
}

export type AdminStore = AdminState & AdminActions;