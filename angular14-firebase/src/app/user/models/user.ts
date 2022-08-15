export interface User {
  id: string,
  name: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  salaryExpectation: number,
  principalStack: number,
  technologies: Technologies[];
}

export interface Technologies {
  id: number,
  tech: string
}