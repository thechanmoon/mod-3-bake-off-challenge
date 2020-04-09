class Adapter {
    static getData(url, id = '') {
        // console.log('1 url : ' + url)
        url = id == '' ? url : `${url}/${id}`;
        //console.log('getData url : ' + url)
        return fetch(url).then(res => res.json())
        //return fetch(url).then(res => {console.log(res); return res.json();})
    }

    static editData(url, data) {
        url = `${url}/${data.id}`;
        console.log('editData : ' + url)
        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }
        return fetch(url, options)
            .then(res => res.json())
    }

    //"Authorization": "Bearer 699a9ff1-88ca-4d77-a26e-e4bc31cfc261"
    static updateData(url, data, Authorization = '')
    {
        // debugger
        console.log('editData : ' + url)
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": Authorization
                "Authorization": Authorization
            },
            body: JSON.stringify(data)
        }
        return fetch(url, options).then(res => res.json())
    }

    static createData(url, data) {
        // url = `${url}/${data.id}`;
        console.log('createData : ' + url)
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                // "Authorization": "Bearer 699a9ff1-88ca-4d77-a26e-e4bc31cfc261"
                // "Authorization": "Bearer 699a9ff1-88ca-4d77-a26e-e4bc31cfc261"
            },
            body: JSON.stringify(data)
        }
        return fetch(url, options).then(res => res.json())
            // .then(console.log)
    }
}