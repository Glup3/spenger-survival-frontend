export default interface Tip {
  id: number;
  author?: string;
  title: string;
  description: string;
  schoolClass?: string;
  vintage: number;
  department?: string;
  issueDate: Date;
  verified: boolean;
  gender?: string;
}
