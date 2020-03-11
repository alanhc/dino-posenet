function getData() {
    let url = 'https://jamfly.dev/api/rank';
    async function getRank() {
        let re = await fetch(url);
        let data = await re.json();
        console.log(data);
    }
}

