export interface TeamData {
  id: string;
  firstname: string;
  lastname: string;
  phone: string;
  department: string;
  position: string;
  status: string;
  profile: string;
}


export interface BlogData {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  createdAt: Date;
  createdBy: string;
  status: string;
}


interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
}
