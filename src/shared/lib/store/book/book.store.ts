import { IBookResponse, IParagraph } from "@shared/lib/types";
import { create } from "zustand";

export interface IBookStore {
  paragraphs: IParagraph[];
  bookImage: string | null;
  setBookStore: (res: IBookResponse) => void;
}

export const useBookStore = create<IBookStore>((set) => ({
  paragraphs: [],
  bookImage: null,
  setBookStore: (res: IBookResponse) => {
    const { bookImage, paragraphs } = res;
    set({ bookImage, paragraphs });
  },
}));
