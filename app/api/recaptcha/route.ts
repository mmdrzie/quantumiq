// app/api/recaptcha/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // دریافت توکن از بدنه درخواست
    const { token } = await request.json();

    // ارسال توکن به سرویس گوگل برای اعتبارسنجی
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      { method: 'POST' }
    );

    const data = await response.json();

    // بررسی پاسخ گوگل
    if (!data.success) {
      return NextResponse.json(
        
        { status: 400 }
      );
    }

    // بررسی نمره امنیتی (اختیاری)
    if (data.score < 0.5) { // نمره کمتر از 0.5 = احتمال اسپم
      return NextResponse.json(
        
        { status: 400 }
      );
    }

    // اگر همه چیز اوکی بود
    return NextResponse.json({ success: true });

  } catch (error) {
    return NextResponse.json(
      
      { status: 500 }
    );
  }

}