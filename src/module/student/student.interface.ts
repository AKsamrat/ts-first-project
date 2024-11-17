import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type LocalGurdian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  contactNo: string;
  email: string;
  emergencyNo: string;
  bloodGroup?: ' A-' | 'A+' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  permanentAddress: string;
  presentAddress: string;
  gurdianName: Guardian;
  localGurdian: LocalGurdian;
  profielImage?: string;
  isActive: 'Active' | 'blocked';
};

// 2. Create a Schema corresponding to the document interface.
