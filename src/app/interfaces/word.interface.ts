export interface Work {
  title: string;
  cardImage: string;
  projectType: string;
  intro: string;
  description: string;
  techStack: {
    name:string,img:string
  }[];
  images: string[];
  heading2: string;
  points: {
    key:string,
    value:string
  }[];
}
