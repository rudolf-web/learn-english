import { Module } from "../types";
import { modulesStarter } from "./modulesStarter";
import { modulesA1 } from "./modulesA1";
import { modulesA2 } from "./modulesA2";
import { modulesB1 } from "./modulesB1";
import { modulesB2 } from "./modulesB2";

export const englishModules: Module[] = [
  ...modulesStarter,
  ...modulesA1,
  ...modulesA2,
  ...modulesB1,
  ...modulesB2
];
