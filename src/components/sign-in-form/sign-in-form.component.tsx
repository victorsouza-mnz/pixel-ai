import { useCallback, useState } from 'react';
import {
  SignInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../../modules/shared/components/Button';

import './sign-in-form.styles.scss';
import { useUserContext } from '../../providers/user.context';

const DEFAULT_FORM_FIELDS = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(DEFAULT_FORM_FIELDS);
  const { setUser } = useUserContext();

  const authWithGoogle = async () => {
    const { user: userFromAuth } = await SignInWithGooglePopup();

    const userFromDb = await createUserDocumentFromAuth(userFromAuth);

    // carregar os dados desse user para a minha aplicação
    // TODO
    setUser(userFromDb);
  };

  const resetFormFields = useCallback(() => {
    setFormFields(DEFAULT_FORM_FIELDS);
  }, []);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { password, email } = formFields;

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setUser(user);
      resetFormFields();
    } catch (e) {
      if (e.code === 'auth/invalid-credential') {
        alert('Invalid email or password');
      }
      alert(e.code);
    }
  };

  return (
    <div className="sign-in-form-container">
      <h2>Alread have an account?</h2>
      <span>Sign in with yout email and password</span>
      <form onSubmit={(event) => handleSubmit(event)}>
        <FormInput
          label={'Email'}
          type="email"
          name="email"
          onChange={handleFormChange}
          value={formFields.email}
          required
        />

        <FormInput
          label={'Password'}
          type="password"
          name="password"
          onChange={handleFormChange}
          value={formFields.password}
          required
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={authWithGoogle}>
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
