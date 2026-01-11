export type Position = {
  title: string;
  year: string;
  description: string;
  skills: string[];
};

export type Experience = {
  company: string;
  positions: Position[];
};

export type Education = {
  institution: string;
  positions: Position[];
};
