import { SUPPORT_EMAIL } from "@/app/CONSTS/consts";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import * as E from "@react-email/components";

const resend = new Resend(process.env.RESEND_API_KEY);
interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: NextRequest) {
  const { name, email, message }: ContactForm = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, message: "All fields are required." },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: SUPPORT_EMAIL,
      to: SUPPORT_EMAIL,
      replyTo: email,
      subject: "Contact Form Submission",
      react: <Message name={email} message={message} />,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

function Message({ name, message }: { name: string; message: string }) {
  return (
    <E.Html lang="en" dir="ltr">
      <E.Container>
        <h1>
          <E.Text>From: {name}</E.Text>
        </h1>
        <p>
          <E.Text>{message}</E.Text>
        </p>
      </E.Container>
    </E.Html>
  );
}
