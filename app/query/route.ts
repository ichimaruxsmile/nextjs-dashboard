import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listInvoices() {
  const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

  return data;
}

export async function GET() {
  try {
    return Response.json(await listInvoices());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

// 添加以下代码以支持cloudflare针对于非pages的部署
// 由于 Cloudflare Pages 运行在 Cloudflare Workers 平台上，它只支持 Edge Runtime，而不支持 Node.js Runtime。
export const runtime = 'edge';
