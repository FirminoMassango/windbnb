import create from "zustand";

export type StayType = {
  city: string;
  maxGuests: number;
};

type State = {
  stay: StayType[];
  addStay: (stay: StayType) => void;
};

const useStayStore = create<State>((set) => ({
  stay: [{city: "Maputo", maxGuests: 15}],
  addStay: (stay: StayType) => {
    set((state) => ({ stay: [stay] }));
  },
}));


export default useStayStore;