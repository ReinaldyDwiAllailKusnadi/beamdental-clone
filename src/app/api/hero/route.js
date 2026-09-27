import { NextResponse } from 'next/server';
import { getCollection, createItem, updateItem, deleteItem } from '@/lib/db';

export async function GET() {
  const slides = getCollection('hero_slides');
  return NextResponse.json({ success: true, data: slides });
}

export async function POST(req) {
  try {
    const body = await req.json();
    if (!body.title) {
      return NextResponse.json({ success: false, error: 'Judul slide wajib diisi' }, { status: 400 });
    }
    const created = createItem('hero_slides', {
      title: body.title,
      subtitle: body.subtitle || '',
      badge: body.badge || '',
      image: body.image || '/downloaded/1_5.png',
      imageMobile: body.imageMobile || '/downloaded/1-1_6.png',
      order: body.order || 99,
      active: body.active !== false
    });
    return NextResponse.json({ success: true, data: created });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const body = await req.json();
    if (!body.id) {
      return NextResponse.json({ success: false, error: 'ID slide wajib disertakan' }, { status: 400 });
    }
    const updated = updateItem('hero_slides', body.id, body);
    if (!updated) {
      return NextResponse.json({ success: false, error: 'Slide tidak ditemukan' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: updated });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ success: false, error: 'ID slide diperlukan' }, { status: 400 });
    }
    const deleted = deleteItem('hero_slides', id);
    return NextResponse.json({ success: deleted });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
