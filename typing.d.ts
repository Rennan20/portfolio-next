export type ProjectType = {
  id: number;
  src: string;
  alt: string;
  name: string;
  description: string;
  link: string;
  type: number;
};

export type Inputs = Record<"name" | "email" | "subject" | "message", string>;
