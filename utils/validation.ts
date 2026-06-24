/**
 * Name: [Parneet Kaur]
 * Date: June 24, 2026
 * Program Description: This file handles the form validation logic for adding new students.
 * It takes an object containing student details as input, processes each field against strict criteria, 
 * and outputs an object containing specific error messages and a boolean indicating overall validity.
 */

export interface StudentInput {
  firstName: string;
  lastName: string;
  dob: string;
  grade: string | number;
}

export interface ValidationResult {
  isValid: boolean;
  errors: {
    firstName?: string;
    lastName?: string;
    dob?: string;
    grade?: string;
  };
}

export function validateStudentData(data: StudentInput): ValidationResult {
  const errors: ValidationResult['errors'] = {};

  // 1. Required fields / No empty strings
  if (!data.firstName || data.firstName.trim() === "") {
    errors.firstName = "First name is required.";
  }
  
  if (!data.lastName || data.lastName.trim() === "") {
    errors.lastName = "Last name is required.";
  }

  // 2. Valid date validation
  if (!data.dob || data.dob.trim() === "") {
    errors.dob = "Date of birth is required.";
  } else {
    const dobDate = new Date(data.dob);
    if (isNaN(dobDate.getTime()) || dobDate > new Date()) {
      errors.dob = "Please enter a valid, past date of birth.";
    }
  }

  // 3. Grade must be a number
  if (data.grade === undefined || data.grade === null || data.grade.toString().trim() === "") {
    errors.grade = "Current grade is required.";
  } else {
    const gradeNum = Number(data.grade);
    if (isNaN(gradeNum)) {
      errors.grade = "Grade must be a valid number.";
    } else if (gradeNum < 1 || gradeNum > 12) {
      errors.grade = "Grade must be between 1 and 12.";
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors: errors
  };
}