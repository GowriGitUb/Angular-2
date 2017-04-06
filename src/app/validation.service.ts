export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': `Minimum length ${validatorValue.requiredLength}`,
            'nameRequired': 'Name is Required',
            'emailRequired': 'Email is Required',
            'profileRequired': 'Profile is Required',
            'projectNameRequired': 'Project Name is Required',
            'projectDesRequired': 'Project Description is Required',
            'usernameRequired': 'Username is required',
            'passwordRequired': 'Password is required',
            'firstNameRequired': 'First Name is required',
            'lastNameRequired': 'Last Name is required',
            'phoneNumberRequired': 'Phone Number is required'
        };

        return config[validatorName];
    }

    static creditCardValidator(control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        } else {
            return { 'invalidCreditCard': true };
        }
    }

    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }

    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }

  static nameRequiredValidator(control) {
    if(control.value == "") {
      return {'nameRequired':true};
    }
  }

  static emailRequiredValidator(control) {
    if(control.value == ""){
    return {'emailRequired':true};
}
  }

   static profileRequiredValidator(control) {
    if(control.value == ""){
    return {'profileRequired':true};
}
  }
  
  static projectNameRequiredValidator(control) {
    if(control.value == ""){
    return {'projectNameRequired':true};
}
  }
  
  static projectDesRequiredValidator(control) {
    if(control.value == ""){
    return {'projectDesRequired':true};
}
  }
  
  static usernameRequiredValidator(control){
    if(control.value == ""){
      return {'usernameRequired': true};
    }
  }
  
  static passwordRequiredValidator(control){
    if(control.value == ""){
      return {'passwordRequired': true};
    }
  }

  static firstNameRequiredValidator(control){
    if(control.value == ""){
      return {'firstNameRequired': true};
    }
  }

  static lastNameRequiredValidator(control){
    if(control.value == ""){
      return {'lastNameRequired': true};
    }
  }

  static phoneNumberRequiredValidator(control){
    if(control.value == ""){
      return {'phoneNumberRequired': true};
    }
  }
}
