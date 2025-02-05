'use server';

import { auth } from '@/lib/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
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

// Signup Action
export async function authenticate(
  state: AuthState | undefined,
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
      isPending: false,
    };

  } catch (error) {
    console.error('Account creation failed:', error);
    return {
      error: {
        code: 'UNKNOWN_ERROR',
        message: 'Account creation failed',
      },
      isPending: false,
    };
  }
}

// Login Action
export async function login(
  state: AuthState | undefined,
  formData: FormData
): Promise<AuthState> {
  const rawFormData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  try {
    // Validate inputs
    if (!validateEmail(rawFormData.email)) {
      throw new Error('Invalid email format');
    }

    if (!validatePassword(rawFormData.password)) {
      throw new Error('Password must be at least 8 characters');
    }

    // Log in the user
    const userCredential = await signInWithEmailAndPassword(
      auth,
      rawFormData.email,
      rawFormData.password
    );

    return { 
      success: true,
      userId: userCredential.user.uid,
      isPending: false,
    };

  } catch (error) {
    console.error('Login failed:', error);
    return {
      error: {
        code: 'LOGIN_ERROR',
        message: 'Invalid email or password',
      },
      isPending: false,
    };
  }
}