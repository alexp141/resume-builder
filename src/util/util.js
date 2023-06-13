import { v4 as uid } from "uuid"

const personalInfoTemplate = {
    id: uid(),
    fname: '',
    lname: '',
    title: '',
    address: '',
    phone: '',
    email: '',
    description: '',
};

const educationInfoTemplate = {
    id: uid(),
    uniName: '',
    city: '',
    degree: '',
    subject: '',
    gDate: '',
};

const experienceInfoTemplate = {
    id: uid(),
    position: '',
    company: '',
    city: '',
    startDate: '',
    endDate: '',
    description: '',
};

const personalInfoExample = {
    id: uid(),
    fname: 'John',
    lname: 'Souls',
    title: 'Software Developer',
    address: '1234 Piermont Dr, Albuquerque, NM',
    phone: '123-555-5555',
    email: 'example@gmail.com',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
     ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
};

const educationInfoExample = {
    id: uid(),
    uniName: 'University of Maryland',
    city: 'College Park',
    degree: 'Bachelor of Science',
    subject: 'Computer Science',
    gDate: 'May, 2023',
};


const experienceInfoExample = [{
        id: uid(),
        position: 'Position Here',
        company: 'My Third Company',
        city: 'Washington D.C.',
        startDate: 'June, 2020',
        endDate: 'Present',
        description: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
        id: uid(),
        position: 'Position Here',
        company: 'My Second Company',
        city: 'New York',
        startDate: 'August, 2018',
        endDate: 'May, 2020',
        description: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
        id: uid(),
        position: 'Position Here',
        company: 'My First Company',
        city: 'New York',
        startDate: 'April, 2014',
        endDate: 'July, 2018',
        description: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    }];


export { personalInfoTemplate, educationInfoTemplate, experienceInfoTemplate, 
        personalInfoExample, educationInfoExample, experienceInfoExample }