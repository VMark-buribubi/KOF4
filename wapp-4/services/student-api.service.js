const baseUrl = 'https://practiceapi.nikprog.hu/Student'

const headers = {
    "Content-Type": "application/json"
}

export const requestGetStudents = async () => {
    const data = await (await fetch(baseUrl)).json()
    console.log(data)
    return data
}

export const requestCreateStudent = async student => {
    console.log(student)
    const data = await (await fetch(baseUrl, {
        method: 'post',
        headers: headers,
        body: JSON.stringify(student)
    })).json()
    console.log(data)
    return data
}

export const requestDeleteStudent = async studentId => {
    const data = await (await fetch(`${baseUrl}/${studentId}`, {
        method: 'delete'
    })).json()
    console.log(data)
    return data
}

export const requestUpdateStudent = async student => {
    const data = await (await fetch(baseUrl, {
        method: 'put',
        headers: headers,
        body: JSON.stringify(student)
    })).json()
    console.log(data)
    return data
}