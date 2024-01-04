import { atom } from "jotai";

export const loading = atom(false);

export const input = atom("");

export const output = atom<Blob | null>(null);