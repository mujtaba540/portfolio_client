export interface Work {
  title: string;
  cardImage: string;
  projectType: string;
  intro: string;
  description: string;
  techStack: {
    FE: string;
    BE: string;
    DB: string;
  };
  images: string[];
}
