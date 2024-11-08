export const validateName = (fullname: string): boolean => {
  const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  const hasSpecialChars = specialChars.test(fullname);
  const numbers = /[0-9]/;
  const hasNumbers = numbers.test(fullname);
  if (hasSpecialChars || hasNumbers) {
    return true;
  } else {
    return false;
  }
};

export const validateEmail = (mail: string): boolean => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (mail.trim() === "") {
    return false;
  } else {
    return !regex.test(mail);
  }
};

export const validatePhoneNumber = (phone: any): boolean => {
  const regex = /^\d{10}$/;
  if (typeof phone !== "string" || phone.trim() === "") {
    return false;
  } else {
    return !regex.test(phone);
  }
};
