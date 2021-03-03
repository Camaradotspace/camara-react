const regex = {
  email: new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ),
  number: new RegExp('^[0-9]+$'),
};

export class Validators {
  static email(value: string, message: string) {
    if (value) {
      const result = regex.email.test(value);
      console.log({ result });
      if (!result) return { error: true, message: message };
    }
    // return false;
  }

  static required(value: any, message: string) {
    if (!value || !value.toString().trim().length) {
      return { error: true, message: message };
    }
    return false;
  }

  static number(value: string, message: string) {
    const length = value ? value.toString().length : 0;

    if (length > 0) {
      const result = regex.number.test(value);
      if (!result) {
        return { error: true, message: message };
      }
    }

    return false;
  }
}

export const validateInput = (validators: any, value: any) => {
  if (validators && validators.length) {
    for (let i = 0; i < validators.length; i++) {
      const error = validators[i].check(value, validators[i].message);
      if (error) {
        return error;
      }
    }
  }
  return false;
};
