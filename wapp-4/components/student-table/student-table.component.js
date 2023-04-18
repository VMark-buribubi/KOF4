import StudentTableItemComponent from './student-table-item/student-table-item.component.js'

export default {
    components: {
        StudentTableItemComponent
    },

    props: ['students', 'deleteHandler', 'updateHandler'],

    template: `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Is Active</th>
                    <th scope="col">Birth Year</th>
                    <th scope="col">Connections</th>
                    <th scope="col">Completed Credits</th>
                    <th scope="col">Active Semester Count</th>
                    <th scope="col">Id</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <student-table-item-component
                    v-for="(student, i) in students"
                    :key="i"
                    :student="student"
                    :index="i + 1"
                    @delete="deleteHandler"
                    @update="updateHandler"
                />
            </tbody>
        </table>
    `
}