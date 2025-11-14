import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names using clsx and tailwind-merge
 * This utility function allows for conditional classes and resolves Tailwind CSS conflicts
 *
 * @example
 * cn("px-2 py-1", condition && "bg-blue-500", "px-4") // Result: "py-1 bg-blue-500 px-4"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
