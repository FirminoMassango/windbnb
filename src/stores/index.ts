import create from "zustand";

export type StayType = {
  city: string;
  maxGuests: number;
  isModalActive: boolean;
};

type State = {
  stay: StayType[];
  isModalActive: boolean;
  addStay: (stay: StayType) => void;
};

const useStayStore = create<State>((set) => ({
  stay: [{city: "", maxGuests: 0, isModalActive: false}],
  isModalActive: false,
  addStay: (stay: StayType) => {
    set((state) => ({ stay: [stay] }));
  },
  deactivateModal: (isModalActive: boolean) => {
    set((state) => ({ isModalActive: false }));
  }
}));


export default useStayStore;