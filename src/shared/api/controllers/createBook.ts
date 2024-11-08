import { IBookDto, IBookResponse } from "@shared/lib/types";
import axios from "axios";

export const createBook = async (data: IBookDto) =>
  await axios.post<IBookResponse>(`${process.env.NEXT_PUBLIC_CBOOK_URL}/api/story`, data);
