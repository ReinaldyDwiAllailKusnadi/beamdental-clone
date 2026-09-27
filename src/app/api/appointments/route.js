import { NextResponse } from 'next/server';
import { getCollection, createItem, updateItem, deleteItem } from '@/lib/db';

export async function GET() {
  const appointments = getCollection('appointments');
  return NextResponse.json({ success: true, data: appointments });
}

export async function POST(req) {
  try {
    const body = await req.json();
    if (!body.name || !body.whatsapp) {
      return NextResponse.json({ success: false, error: 'Nama dan nomor WhatsApp wajib diisi' }, { status: 400 });
    }
    const created = createItem('appointments', {
      name: body.name,
      whatsapp: body.whatsapp,
      email: body.email || '-',
      complaint: body.complaint || body.message || '-',
      service: body.service || 'Konsultasi Umum',
      date: new Date().toISOString().split('T')[0],
      status: 'Pending'
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
      return NextResponse.json({ success: false, error: 'ID data diperlukan' }, { status: 400 });
    }
    const updated = updateItem('appointments', body.id, body);
    if (!updated) {
      return NextResponse.json({ success: false, error: 'Data tidak ditemukan' }, { status: 404 });
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
      return NextResponse.json({ success: false, error: 'ID data diperlukan' }, { status: 400 });
    }
    const deleted = deleteItem('appointments', id);
    return NextResponse.json({ success: deleted });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
