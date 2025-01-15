export interface iTimelineData {
  year: string;
  title: string;
  company: string;
  description: string[];
  head?: boolean;
  tail?: boolean;
  isLeft?: boolean;
}

export interface iWhatIDoData {
  workTitle: string;
  workSubtitle: string;
  workDescription: string;
  workType: "Projects" | "Courses";
  workTopic: "JS" | "CSHARP" | "C&CPP" | "PYTHON" | "COURCES";
  workProjects?: Partial<iProjectDetails[]>;
}

export interface iProjectDetails {
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
