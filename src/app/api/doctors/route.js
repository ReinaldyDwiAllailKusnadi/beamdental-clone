import { NextResponse } from 'next/server';
import { getCollection, createItem, updateItem, deleteItem } from '@/lib/db';

export async function GET() {
  const doctors = getCollection('doctors');
  return NextResponse.json({ success: true, data: doctors });
}

export async function POST(req) {
  try {
    const body = await req.json();
    if (!body.name) {
      return NextResponse.json({ success: false, error: 'Nama dokter wajib diisi' }, { status: 400 });
    }
    const created = createItem('doctors', {
      name: body.name,
      specialty: body.specialty || 'General Dentist',
      schedule: body.schedule || 'Sesuai janji temu',
      image: body.image || '/downloaded/Blank-Docter_13.png',
      status: body.status || 'Aktif'
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
      return NextResponse.json({ success: false, error: 'ID dokter wajib disertakan' }, { status: 400 });
    }
    const updated = updateItem('doctors', body.id, body);
    if (!updated) {
      return NextResponse.json({ success: false, error: 'Dokter tidak ditemukan' }, { status: 404 });
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
      return NextResponse.json({ success: false, error: 'ID dokter diperlukan' }, { status: 400 });
    }
    const deleted = deleteItem('doctors', id);
    return NextResponse.json({ success: deleted });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
