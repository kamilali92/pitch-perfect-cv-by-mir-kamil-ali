
export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    profileImage?: string;
  };
  aboutMe: string;
  education: {
    id: string;
    school: string;
    degree: string;
    year: string;
  }[];
  experience: {
    id: string;
    company: string;
    position: string;
    duration: string;
    description: string;
  }[];
  skills: {
    id: string;
    skill: string;
  }[];
  awards: {
    id: string;
    title: string;
    organization: string;
    year: string;
  }[];
  volunteering: {
    id: string;
    organization: string;
    role: string;
    description: string;
    year: string;
  }[];
  interests: string;
  training: {
    id: string;
    course: string;
    institution: string;
    year: string;
  }[];
}

export const defaultResumeData: ResumeData = {
  personalInfo: {
    name: "OLIVIA WILSON",
    title: "HIGH SCHOOL/JUNIOR",
    profileImage: "",
  },
  aboutMe: "I am a friendly, organized High School Student looking for part-time, and fulltime employment. I have acquired great customer service experience from working in my family's cafe. I love learning new skills, and am always on time. I look forward to becoming part of your team.",
  education: [
    {
      id: "edu1",
      school: "Roseville High School",
      degree: "Grade 11 (current)",
      year: "2021-present",
    }
  ],
  experience: [
    {
      id: "exp1",
      company: "Roseville Coffee Shop",
      position: "Barista/Assistant",
      duration: "2021 to 2022",
      description: "Served customers, operated cash register, prepared beverages",
    },
    {
      id: "exp2",
      company: "Babysitting",
      position: "Babysitter",
      duration: "2019 to 2022",
      description: "Babysitting for families in my local area for children up to 8 years",
    }
  ],
  skills: [
    { id: "skill1", skill: "Management of Cash & Credit Payments" },
    { id: "skill2", skill: "Pride of Home/Office Experience" },
    { id: "skill3", skill: "Answering Phones & Emails" },
    { id: "skill4", skill: "Serving of food and drinks" },
    { id: "skill5", skill: "Processing Phone and taking orders" },
    { id: "skill6", skill: "Demonstrated good levels of routine/engagement" },
    { id: "skill7", skill: "Working independently and following direction of Manager" },
    { id: "skill8", skill: "Grades to a High Standard" }
  ],
  awards: [
    {
      id: "award1",
      title: "Gold with Honours",
      organization: "Roseville High School - Grade 11",
      year: "2022",
    },
    {
      id: "award2",
      title: "Gold Academic Award",
      organization: "Roseville High School - Grade 10",
      year: "2021",
    }
  ],
  volunteering: [
    {
      id: "vol1",
      organization: "Monthly bookshelf and staff helper",
      role: "Library Volunteer",
      description: "",
      year: "2022-present",
    },
    {
      id: "vol2", 
      organization: "Annual fundraising and record keeping for Friends of the Local Animal Stray Deal",
      role: "Community Trust Rescue",
      description: "", 
      year: "2021",
    }
  ],
  interests: "I am the captain of the school basketball team, and I play local representative soccer. I am passionate about reading, particularly science, philosophy, and local Roseville Theatre Productions.",
  training: [
    {
      id: "train1",
      course: "Barista Training Course",
      institution: "Warner & Spencer Basic Barista Course",
      year: "2022",
    }
  ]
};
