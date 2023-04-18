export default {
    props: ['student', 'index'],

    computed: {
        border() {
            return `profile-${this.student.isActive ? 'active' : 'inactive'}`
        },

        name() {
            return `name-${this.student.isActive ? 'active' : 'inactive'}`
        }
    },

    methods: {
        log() {
            console.log(this.student.id, this.student.name)
        }
    },

    template: `
        <tr class="table-item" @click="log">
            <th scope="row">{{ index }}</th>
            <td>
                <img
                    class="profile"
                    :class="border"
                    :src="student.image"
                    :alt="student.image"
                >
            </td>
            <td>
                <span :class="name">{{ student.name }}</span>
            </td>
            <td>{{ student.isActive }}</td>
            <td>{{ student.birthYear }}</td>
            <td>{{ student.connections }}</td>
            <td>{{ student.completedCredits }}</td>
            <td>{{ student.activeSemesterCount }}</td>
            <td>{{ student.id }}</td>
            <td>
                <button
                    type="button"
                    class="button2"
                    @click="$emit('delete', student.id)"
                >Delete</button>
            </td>
        </tr>        
    `
}