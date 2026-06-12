import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(request: NextRequest) {
  try {
    const { experience, jobTitle, jobDescription } = await request.json();
    if (!experience || !jobTitle || !jobDescription) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const message = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1000,
      messages: [{
        role: 'user',
        content: `You are an expert resume writer helping a student get hired.

Job Title: ${jobTitle}
Job Description: ${jobDescription}
Student Experience: ${experience}

BULLETS: (5-7 points, start each with "• ", action verbs, match JD keywords)
COVER_LETTER: (3 paragraphs, under 300 words, professional but genuine)
SKILLS: (exactly 3 most important skills from JD)

Format EXACTLY like this, no extra text:
BULLETS:
- [bullet]

COVER_LETTER:
[text]

SKILLS:
[skill 1]
[skill 2]
[skill 3]`
      }]
    });

    const text = message.content[0].type === 'text' ? message.content[0].text : '';
    const bulletsMatch = text.match(/BULLETS:\n([\s\S]*?)(?=\nCOVER_LETTER:)/);
    const coverMatch = text.match(/COVER_LETTER:\n([\s\S]*?)(?=\nSKILLS:)/);
    const skillsMatch = text.match(/SKILLS:\n([\s\S]*?)$/);

    return NextResponse.json({
      bullets: bulletsMatch ? bulletsMatch[1].trim().split('\n').filter(Boolean) : [],
      coverLetter: coverMatch ? coverMatch[1].trim() : '',
      skills: skillsMatch ? skillsMatch[1].trim().split('\n').filter(Boolean) : [],
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to generate' }, { status: 500 });
  }
}