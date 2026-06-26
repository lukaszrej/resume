export type Position = {
  title: string;
  year: string;
  description: string;
  skills: string[];
};

export type Experience = {
  company: string;
  current?: boolean;
  positions: Position[];
};

export type Education = {
  institution: string;
  positions: Position[];
};
