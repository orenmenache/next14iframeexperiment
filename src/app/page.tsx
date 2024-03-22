export default function Home() {
    const clientName = 'Shmual';
    const clientId = '345';
    const url = `https://clownfish-app-atszh.ondigitalocean.app/protected?clientId=${clientId}&clientName=${clientName}`;

    return (
        <main>
            <iframe
                src={url}
                // style={{
                //     width: '100%',
                //     height: '100vh',
                //     border: 'none',
                //     backgroundColor: 'gray',
                // }}
            />
        </main>
    );
}
