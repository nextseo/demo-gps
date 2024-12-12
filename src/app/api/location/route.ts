import mysql from 'mysql2/promise';
import { NextResponse } from 'next/server';

export async function GET() {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  try {
    const [rows] = await connection.execute('SELECT * FROM gps');
    await connection.end();

    return NextResponse.json(rows);
  } catch (error: any) {
    await connection.end();
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}