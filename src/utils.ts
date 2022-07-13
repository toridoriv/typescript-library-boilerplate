import { magenta } from "ansi-colors";

export function helloThere(): string {
  return "Hello there";
}

export function ohHiMark(): string {
  return "Oh, hi Mark";
}

export function ohHiMarkButInRed(): string {
  return magenta(ohHiMark());
}
