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
    return (
        <div>
            <pre>{`clientId: ${clientId} clientName: ${clientName}`}</pre>
        </div>
    );
}
