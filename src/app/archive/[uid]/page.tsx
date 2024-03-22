import React from 'react';

export default async function Page({ params }: { params: { uid: string } }) {
    if (!('uid' in params))
        return <h1>No uid, shouldn't be possible. Check with admin</h1>;
    const uid = params.uid;
    return (
        <div>
            <pre>{uid}</pre>
        </div>
    );
}
