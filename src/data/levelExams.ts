import { EXAM_STARTER } from "./examStarter";
import { EXAM_A1 } from "./examA1";
import { EXAM_A2 } from "./examA2";
import { EXAM_B1 } from "./examB1";
import { EXAM_B2 } from "./examB2";

export interface LevelExamQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // index of option
  explanation: string;
}

export const LEVEL_EXAMS: Record<"Starter" | "A1" | "A2" | "B1" | "B2", LevelExamQuestion[]> = {
  Starter: EXAM_STARTER,
  A1: EXAM_A1,
  A2: EXAM_A2,
  B1: EXAM_B1,
  B2: EXAM_B2,
};
