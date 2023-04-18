import {
    requestGetStudents,
    requestCreateStudent,
    requestDeleteStudent,
    requestUpdateStudent
} from './services/student-api.service.js'

import {
    FormCreateComponent,
    FormUpdateComponent,
    StudentTableComponent
} from './components/index.js'


const { createApp } = Vue


/*
{
    "name": "VM-Mike Oxlong",
    "isActive": true,
    "birthYear": 1980,
    "connections": 1000,
    "completedCredits": 180,
    "activeSemesterCount": 6,
    "image": "https://i.imgflip.com/5m0hgs.png"
}
*/


createApp({
    components: {
        FormCreateComponent,
        FormUpdateComponent,
        StudentTableComponent
    },

    data() {
        const plainStudent = {
            id: '',
            name: '',
            isActive: '',
            birthYear: '',
            connections: '',
            completedCredits: '',
            activeSemesterCount: '',
            image: ''
        }
        
        return {
            students: [],
            studentOnUpdate: plainStudent,
            plainStudent
        }
    },

    created() {
        this.getStudents()
    },

    methods: {
        async getStudents() {
            try {
                this.students = await requestGetStudents()
            }
            catch (ex) {
                console.log(ex)
            }
        },

        async createStudent(studentString) {
            try {
                const student = JSON.parse(studentString)
                student.id = ''
                const newStudent = await requestCreateStudent(student)
                this.students = [...this.students, newStudent]
            }
            catch (ex) {
                console.log(ex)
            }
        },

        async deleteStudent(studentId) {
            try {
                await requestDeleteStudent(studentId)
                this.students = this.students.filter(x => x.id !== studentId)
            }
            catch (ex) {
                console.log(ex)
            }
        },

        async updateStudent(student) {
            try {
                const checkedStudent = {}
                const foundStudent = this.students.find(x => x.id === student.id)
                for (const [prop, value] of Object.entries(student)) {
                    if (value !== '') checkedStudent[prop] = value
                    else checkedStudent[prop] = foundStudent[prop]
                    
                    checkedStudent[prop] = checkedStudent[prop] === 'true' ? true
                        : checkedStudent[prop] === 'false' ? false
                            : checkedStudent[prop]
                }

                console.log(checkedStudent)
                const updatedStudent = await requestUpdateStudent(checkedStudent)
                this.students = this.students.map(x => x.id === updatedStudent.id ? updatedStudent : x)
            }
            catch (ex) {
                console.log(ex)
            }
        },
        
        
        clearStudentOnUpdate() {
            this.studentOnUpdate = this.plainStudent
        },

        setStudentOnUpdate(student) {
            this.studentOnUpdate = student
        }
    },

    template: `
        <form-create-component @create="createStudent"/>
        <form-update-component
            :student="studentOnUpdate"
            @update="updateStudent"
            @clear="clearStudentOnUpdate"
        />
        <student-table-component
            :students="students"
            :deleteHandler="deleteStudent"
            :updateHandler="setStudentOnUpdate"
        />
    `
}).mount('#app-root')