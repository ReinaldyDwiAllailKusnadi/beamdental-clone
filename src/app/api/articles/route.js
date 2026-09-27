import { NextResponse } from 'next/server';
import { getCollection, createItem, updateItem, deleteItem } from '@/lib/db';

export async function GET() {
  const articles = getCollection('articles');
  return NextResponse.json({ success: true, data: articles });
}

export async function POST(req) {
  try {
    const body = await req.json();
    if (!body.title) {
      return NextResponse.json({ success: false, error: 'Judul artikel wajib diisi' }, { status: 400 });
    }
    const created = createItem('articles', {
      title: body.title,
      category: body.category || 'Kesehatan Gigi',
      excerpt: body.excerpt || '',
      date: body.date || new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      author: body.author || 'Tim Dokter Beam Dental',
      image: body.image || '/downloaded/Gemini_Generated_Image_q1fdecq1fdecq1fd_41.png'
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
      return NextResponse.json({ success: false, error: 'ID artikel wajib disertakan' }, { status: 400 });
    }
    const updated = updateItem('articles', body.id, body);
    if (!updated) {
      return NextResponse.json({ success: false, error: 'Artikel tidak ditemukan' }, { status: 404 });
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
      return NextResponse.json({ success: false, error: 'ID artikel diperlukan' }, { status: 400 });
    }
    const deleted = deleteItem('articles', id);
    return NextResponse.json({ success: deleted });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
