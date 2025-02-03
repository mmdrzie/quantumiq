// Validation utilities
export function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  export function validatePassword(password: string): boolean {
    return password.length >= 8;
  }
  
  // reCAPTCHA validation
  export async function validateRecaptcha(token: string): Promise<{ success: boolean }> {
    try {
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
        { method: 'POST' }
      );
      return await response.json();
    } catch (error) {
      return { success: false };
    }
  }