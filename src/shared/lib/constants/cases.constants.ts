import type { ICase } from "../types";
import { FLATSPACE } from "./cases/flatspace";
import { PLAGTV } from "./cases/plagtv";
import { ADVANCED_RD } from "./cases/advanced-rd";
import { XILLION } from "./cases/xillion";
import { HOARDER_NEST } from "./cases/hoardernest";
import { GAS_MONSTERS } from "./cases/gas-monsters";
import { THE_HEIST } from "./cases/the-heist";
import { CHARITY_PLATFORM } from "./cases/charity-platform";
import { SIPSIGNAL } from "./cases/sipsignal";
import { PERSONAL } from "./cases/personal";
import { DERMADEX } from "./cases/dermadex";
import { UNIVERSITY_CHATBOT } from "./cases/university-chatbot";
import { AI_CHATBOT } from "./cases/ai-chatbot";
import { DONOR } from "./cases/donor-finance";
import { LLM_CHATBOT } from "./cases/llm-chatbot";
import { BVKS } from "./cases/bvks";
import { FAIRY_TALE_AI } from "./cases/fairy-tale-ai";
import { UDBARA } from "./cases/udbara";
import { LIDAR } from "@shared/lib/constants/cases/lidar";
// import { BIT_GRADUATE } from "./cases/bit-graduate";

export const CASES: ICase[] = [
  LIDAR,
  UDBARA,
  FAIRY_TALE_AI,
  BVKS,
  DONOR,
  LLM_CHATBOT,
  UNIVERSITY_CHATBOT,
  DERMADEX,
  FLATSPACE,
  PLAGTV,
  ADVANCED_RD,
  XILLION,
  HOARDER_NEST,
  GAS_MONSTERS,
  THE_HEIST,
  CHARITY_PLATFORM,
  SIPSIGNAL,
  PERSONAL,
  AI_CHATBOT,
  // BIT_GRADUATE,
];
