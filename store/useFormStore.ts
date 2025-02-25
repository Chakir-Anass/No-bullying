import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FormState {
  responses: Record<string, string>; // Store responses by question name
  setResponse: (name: string, value: string) => void;
  resetForm: () => void;
}

export const useFormStore = create<FormState>()(
  persist(
    (set) => ({
      responses: {}, // Stores user answers
      setResponse: (name, value) =>
        set((state) => ({
          responses: { ...state.responses, [name]: value },
        })),
      resetForm: () =>
        set(() => ({
          responses: {},
        })),
    }),
    {
      name: "user-responses-storage", // Local storage key
    }
  )
);
