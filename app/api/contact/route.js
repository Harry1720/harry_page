import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name = "",
      email = "",
      message = "",
      botcheck = "",
      subject = "New contact from Harry portfolio",
      from_name = "Harry Portfolio",
    } = body ?? {};

    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing Web3Forms access key",
        },
        { status: 500 }
      );
    }

    const web3Payload = {
      access_key: accessKey,
      name,
      email,
      message,
      botcheck,
      subject,
      from_name,
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(web3Payload),
    });

    const rawText = await response.text();
    let result = null;

    try {
      result = rawText ? JSON.parse(rawText) : null;
    } catch {
      result = null;
    }

    const isSuccess =
      response.ok &&
      (result?.success === true ||
        result?.success === "true" ||
        (result?.success === undefined && rawText.length > 0));

    if (isSuccess) {
      return NextResponse.json({
        success: true,
        message: "Message sent successfully",
      });
    }

    return NextResponse.json(
      {
        success: false,
        message:
          typeof result?.message === "string"
            ? result.message
            : "Unable to submit contact form",
      },
      { status: response.status || 400 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unexpected server error while submitting contact form",
      },
      { status: 500 }
    );
  }
}
