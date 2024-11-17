import { Schema, model, connect } from 'mongoose';
import { Guardian, LocalGurdian, Student, UserName } from './student.interface';

const UserNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const GuardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const LocalGurdianSchema = new Schema<LocalGurdian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});
const studentSchema = new Schema<Student>({
  id: { type: 'String' },
  name: UserNameSchema,
  gender: ['male', 'female'], //enam type
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyNo: { type: String, required: true },
  bloodGroup: ['A-', 'A+', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  gurdianName: GuardianSchema,
  localGurdian: LocalGurdianSchema,
  profielImage: { type: String },
  isActive: ['Active', 'blocked'],
});

//create model

export const StudentModel = model<Student>('Student', studentSchema);
