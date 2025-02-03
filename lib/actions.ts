'use server';

// Add at the top of the file

import { auth } from '@/lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { 
  validateEmail, 
  validatePassword, 
  validateRecaptcha 
} from '@/lib/validation';


export async function authenticate(
  prevState: any,
  formData: FormData
) {
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
      userId: userCredential.user.uid 
    };

  } catch (error: any) {
    return {
      error: {
        code: error.code || 'UNKNOWN_ERROR',
        message: error.message || 'Account creation failed'
      },
      isPending: false
    };
  }
}
