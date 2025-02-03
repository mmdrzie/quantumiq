'use server';

import { auth } from '@/lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { 
  validateEmail, 
  validatePassword, 
  validateRecaptcha 
} from '@/lib/validation';

type AuthState = {
  success?: boolean;
  userId?: string;
  error?: {
    code: string;
    message: string;
  };
  isPending?: boolean;
};

export async function authenticate(
  state: AuthState | undefined, // Handle `undefined` state
  formData: FormData
): Promise<AuthState> {
  const rawFormData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    recaptchaToken: formData.get('recaptchaToken') as string,
  };

  try {
    // Validate inputs
    if (!validateEmail(rawFormData.email)) {
      throw new Error('Invalid email format');
    }

    if (!validatePassword(rawFormData.password)) {
      throw new Error('Password must be at least 8 characters');
    }

    // Validate reCAPTCHA
    const { success } = await validateRecaptcha(rawFormData.recaptchaToken);
    if (!success) throw new Error('Security verification failed');

    // Create user
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      rawFormData.email,
      rawFormData.password
    );

    return { 
      success: true,
      userId: userCredential.user.uid,
      isPending: false, // Ensure `isPending` is included
    };

  } catch (error) {
    console.error('Account creation failed:', error); // Log the error for debugging
    return {
      error: {
        code: 'UNKNOWN_ERROR',
        message: 'Account creation failed',
      },
      isPending: false,
    };
  }
}