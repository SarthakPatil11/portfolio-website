export interface iTimelineData {
  id?: string;
  year: string;
  title: string;
  company: string;
  description: string[];
  nodeNum: number;
  head?: boolean;
  tail?: boolean;
  isLeft?: boolean;
}

export interface iWhatIDoData {
  id?: string;
  workTitle?: string;
  workSubtitle?: string;
  workDescription?: string;
  workType?: "Projects" | "Courses";
  workTopic?: "JS" | "CSHARP" | "C&CPP" | "PYTHON" | "COURCES";
  workProjects?: Partial<Array<Partial<iProjectDetails>>>;
}

export interface iProjectDetails {
  id?: string;
  projImgPath: string;
  projTopic: "JS" | "CSHARP" | "C&CPP" | "PYTHON" | "COURCES";
  projTitle: string;
  projSubtitle: string;
  projDescription: string;
  projLinks: iButton[];
}

export interface iButton {
  btnText: string;
  btnLink: string;
}
