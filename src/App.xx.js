import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   // 1) Rendering the component we want to test into the virtual DOM
//   // 2) Finding the Elements
//   const linkElement = screen.getByText(/learn react/i);
//   // 3) Assertion
//   expect(linkElement).toBeInTheDocument();
// });

function typeIntoForm(email, password, confirmPassword, submitBtn) {
  const emailInputElement = screen.getByRole("textbox", {name: /email/i});
  const passwordInputElement = screen.getByLabelText("Password");
  const passwordConfirmationInputElement = screen.getByLabelText(/confirm password/i);
  const submitBtnElement = screen.getByRole("button");

  if(email) {
    fireEvent.change(emailInputElement, {target: {value: email}});
  }
  if(password) {
    fireEvent.change(passwordInputElement, {target: {value: password}});
  }
  if(confirmPassword) {
    fireEvent.change(passwordConfirmationInputElement, {target: {value: confirmPassword}});
  }
  if(submitBtn) {
    fireEvent.click(submitBtnElement);
  }
  return [emailInputElement, passwordInputElement, passwordConfirmationInputElement];
}

function handleErrors(emailError, passwordError, confirmPasswordError) {
  const errorElementsArray = [];
  if(emailError) {
    const EmailErrorParagraphElement = screen.queryByText(
      /the email you input is invalid/i
    );
    errorElementsArray.push(EmailErrorParagraphElement);
  }
  if(passwordError) {
    const passwordErrorParagraphElement = screen.queryByText(
      /the password you entered should contain 5 or more characters/i
    );
    errorElementsArray.push(passwordErrorParagraphElement);
  }
  if(confirmPasswordError) {
    const ConfirmationPasswordErrorParagraphElement = screen.queryByText(
      /the passwords you entered doesn't match/i
    );
    errorElementsArray.push(ConfirmationPasswordErrorParagraphElement);
  }
  return errorElementsArray;
}

describe("Testing APP", () => {
  beforeEach(() => {
    render(<App />);
  });
  
  describe('Testing Emptiness', () => {
    test('inputs should be initially empty', () => {
      const [email, password, confirmPassword] = typeIntoForm();
      expect(email.value).toBe("");
      expect(password.value).toBe("");
      expect(confirmPassword.value).toBe("");
    });
  });

  describe('Testing Typing', () => {
    test('should be able to type an email', () => {
      const [email] = typeIntoForm("Ahmed@gmail.com");
      expect(email.value).toBe("Ahmed@gmail.com");
    });
    
    test('should be able to type a password', () => {
      const password = typeIntoForm(null, "123", null, null)[1];
      expect(password.value).toBe("123");
    });
    
    test('should be able to type a confirmation password', () => {
      const confirmPassword = typeIntoForm(null, null, "123", null)[2];
      expect(confirmPassword.value).toBe("123");
    });
  });
 
  describe('Testing Errors', () =>{
    test('should not show any errors before entering any values', () => {
      const [emailError, passwordError, confirmPasswordError] = handleErrors(true, true, true);
      expect(emailError).not.toBeInTheDocument();
      expect(passwordError).not.toBeInTheDocument();
      expect(confirmPasswordError).not.toBeInTheDocument();
    });
    
    test('should render the email error component on invalid email', () => {
      typeIntoForm("Ahmedgmail.com", null, null, true);
      const [emailError] = handleErrors(true, null, null);
      expect(emailError).toBeInTheDocument();
    });
    
    test('should not render the email error component with a valid email', () => {
      typeIntoForm("Ahmed@gmail.com", null, null, true);
      const [emailError] = handleErrors(true, null, null);
      expect(emailError).not.toBeInTheDocument();
    });
    
    test('should render the password error component if the email is valid and the password is less than 5  characters', () => {
      typeIntoForm("Ahmed@gmail.com", "123", null, true);
      const [passwordError] = handleErrors(null, true, null);
      expect(passwordError).toBeInTheDocument();
    });
    
    test('should not render the password error component when the the email is valid and the password is greater than or equal to 5 characters', () => {
      typeIntoForm("Ahmed@gmail.com", "12345", null, true);
      const [passwordError] = handleErrors(null, true, null);
      expect(passwordError).not.toBeInTheDocument();
    });
    
    test('should render the password confirmation error if the 2 password fields does not match', () => {
      typeIntoForm("Ahmed@gmail.com", "12345", "1234", true);
      const [confirmPasswordError] = handleErrors(null, null, true);
      expect(confirmPasswordError).toBeInTheDocument();
    });
    
    test('should not render any errors if every input is valid', () => {
      typeIntoForm("Ahmed@gmail.com", "12345", "12345", true);
      const [emailError, passwordError, confirmPasswordError] = handleErrors(true, true, true);
      expect(emailError).not.toBeInTheDocument();
      expect(passwordError).not.toBeInTheDocument();
      expect(confirmPasswordError).not.toBeInTheDocument();
    });
  });
});
