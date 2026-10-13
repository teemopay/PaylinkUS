import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message } = body;
    const LARK_WEBHOOK_URL =
      "https://open.larksuite.com/open-apis/bot/v2/hook/c1bd7aab-5c65-49ce-9c88-e7e24d860bee";
    if (!message) {
      return NextResponse.json(
        { error: "Message cannot be empty" },
        { status: 400 },
      );
    }
    const {
      fullName,
      email,
      companyName,
      companyWebsite,
      industryContactUs,
      howGetToKnowUs,
      monthlyPotentialVolume,
      solutionsNeed,
      service,
      help,
    } = message;
    const params = [
      [
        {
          tag: "text",
          text: `Full Name: 【${fullName}】`,
        },
      ],
      [
        {
          tag: "text",
          text: `Email: 【${email}】`,
        },
      ],
      [
        {
          tag: "text",
          text: `Company Name: 【${companyName}】`,
        },
      ],
      [
        {
          tag: "text",
          text: `Company Website: 【${companyWebsite}】`,
        },
      ],
      [
        {
          tag: "text",
          text: `industry-contact us: 【${industryContactUs}】`,
        },
      ],
      [
        {
          tag: "text",
          text: `How did you get to know us: 【${howGetToKnowUs}】`,
        },
      ],
      [
        {
          tag: "text",
          text: `Monthly potential volume: 【${monthlyPotentialVolume}】`,
        },
      ],
      [
        {
          tag: "text",
          text: `Which solutions do you need: 【${solutionsNeed}】`,
        },
      ],
      [
        {
          tag: "text",
          text: `In which region(s) you are interested in using our service: 【${service}】`,
        },
      ],
      [
        {
          tag: "text",
          text: `How can PaylinkUS help your business? Feel free to ask anything: 【${help}】`,
        },
      ],
      // [
      //   {
      //     tag: "at",
      //     user_id: "6g1d9371",
      //   },
      // ],
    ];
    const response = await fetch(LARK_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        msg_type: "post",
        content: {
          post: {
            zh_cn: {
              title: "PaylinkUS官网留言:",
              content: params,
            },
          },
        },
      }),
    });

    if (response.ok) {
      return NextResponse.json({ status: "Message sent successfully" });
    } else {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData },
        { status: response.status },
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
