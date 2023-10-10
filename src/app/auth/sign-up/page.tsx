import ReCAPTCHA from 'react-google-recaptcha';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign up - BathLARP',
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignUp() {
  function onChange(token: string | null) {
    console.log('Captcha value:', token);
  }

  return (
    <>
      <form>
        <label id="username-label" aria-label="username-label">
          Username
          <input type="text" id="username" aria-labelledby="username-label" />
        </label>
        <label id="password-label" aria-label="password-label">
          Password
          <input
            type="password"
            id="password"
            aria-labelledby="password-label"
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
