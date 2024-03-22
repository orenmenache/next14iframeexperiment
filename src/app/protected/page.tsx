import { MYSQL_DB } from '@/server/classes/MYSQL_DB';
import React from 'react';

type SearchParams = {
    clientId: string;
    clientName: string;
};

type PageProps = {
    searchParams: SearchParams;
};

export default async function Page({ searchParams }: PageProps) {
    const clientId = searchParams.clientId;
    const clientName = searchParams.clientName;
    if (!clientId || !clientName) return <h1>No clientId or no clientName</h1>;

    const DB = new MYSQL_DB();
    DB.createPool();

    try {
        const selection = await DB.SELECT(`backoffice.customers`, {
            customer_id: clientId,
        });
        return (
            <div>
                {selection.length > 0 ? (
                    <pre>{JSON.stringify(selection)}</pre>
                ) : (
                    <pre>{`No client with id: ${clientId}`}</pre>
                )}
            </div>
        );
    } catch (e) {
        console.error(e);
    } finally {
        await DB.pool.end();
    }

    return <div>{clientId === '123' && <h1>{`YES!`}</h1>}</div>;
}
