export const fetchData = (csvData: string, context: string) => {
    return new Promise(async res => {
        const fetchResponse = await fetch('/api/cook', {
            method: 'POST',
            body: JSON.stringify({ data: csvData, context }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('Fetch response', fetchResponse)
    })
}