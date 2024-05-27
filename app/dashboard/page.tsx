'use client'
import { fetchData } from "@/lib/dashboard";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function Dashboard() {
    const { data: session, status } = useSession();
    const [file, setFile] = useState(null);
    const [context, setContext] = useState(null);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const cook = async () => {
        if(!file || !context) return;
        setLoading(true);
        let result = await fetchData(file, context)

        setResult(result as any);
    }

    if (session && session.user) {
        return (
            <div className="mt-36">
                <h1>Dashboard</h1>
                {/** @ts-ignore */}
                <input type="file" name="csv" id="csv" accept=".csv" onChange={async (e) => setFile(await e.target.files[0].text())} />
                {/** @ts-ignore */}
                <textarea onChange={(e) => setContext(e.target.value)}></textarea>
                <button onClick={cook} disabled={loading}>Cook</button>
                {loading && <p>Loading...</p>}

                {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
            </div>

        );
    }
    else {
        return (
            <div>
                <h1>Dashboard</h1>
                <p>Protected content</p>
                <p>Not signed in</p>
            </div>
        );
    }
}