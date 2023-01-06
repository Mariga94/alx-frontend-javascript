interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
};

interface Directors extends Teacher {
  numberOfReports: number;
};

function printTeacher(firstName:string, lastName:string) {
  return `${firstName[0]}. ${lastName}`;
}
