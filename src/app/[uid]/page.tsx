import React from 'react';

export default async function Page({ params }: { params: { lang: string } }) {
    if (!('uid' in params))
        return <h1>No uid, shouldn't be possible. Check with admin</h1>;
    const uid = params.uid as string;
    return (
        <div>
            <pre>{uid}</pre>
        </div>
    );
}
