import { NextResponse } from 'next/server';
import { getCollection, saveCollection } from '@/lib/db';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'clinic_info.json');
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ success: true, data: {} });
  }
  const settings = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return NextResponse.json({ success: true, data: settings });
}

export async function PUT(req) {
  try {
    const body = await req.json();
    const filePath = path.join(process.cwd(), 'src', 'data', 'clinic_info.json');
    fs.writeFileSync(filePath, JSON.stringify(body, null, 2), 'utf8');
    return NextResponse.json({ success: true, data: body });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
