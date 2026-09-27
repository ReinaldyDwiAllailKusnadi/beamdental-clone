import { NextResponse } from 'next/server';
import { getCollection, createItem, updateItem, deleteItem } from '@/lib/db';

export async function GET() {
  const services = getCollection('services');
  return NextResponse.json({ success: true, data: services });
}

export async function POST(req) {
  try {
    const body = await req.json();
    if (!body.title) {
      return NextResponse.json({ success: false, error: 'Judul layanan wajib diisi' }, { status: 400 });
    }
    const created = createItem('services', {
      title: body.title,
      category: body.category || 'Umum',
      description: body.description || '',
      image: body.image || '/downloaded/General-treatment_22.png',
      order: body.order || 99
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
      return NextResponse.json({ success: false, error: 'ID layanan wajib disertakan' }, { status: 400 });
    }
    const updated = updateItem('services', body.id, body);
    if (!updated) {
      return NextResponse.json({ success: false, error: 'Layanan tidak ditemukan' }, { status: 404 });
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
      return NextResponse.json({ success: false, error: 'ID layanan diperlukan' }, { status: 400 });
    }
    const deleted = deleteItem('services', id);
    return NextResponse.json({ success: deleted });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
