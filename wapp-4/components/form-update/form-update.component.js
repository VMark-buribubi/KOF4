export default {
    props: ['student'],

    methods: {
        submit() {
            this.$emit('update', this.student)
            this.$emit('clear')
        }
    },

    template: `
        <form class="row g-3 form form-update">
            <div class="col-12">
                <input type="text" class="form-control" placeholder="Id" v-model="student.id">
            </div>
            <div class="col-12">
                <input type="text" class="form-control" placeholder="Name" v-model="student.name">
            </div>
            <div class="col-12">
                <input type="text" class="form-control" placeholder="Is active (true / false)" v-model="student.isActive">
            </div>
            <div class="col-12">
                <input type="text" class="form-control" placeholder="Birth Year" v-model="student.birthYear">
            </div>
            <div class="col-12">
                <input type="text" class="form-control" placeholder="Connections" v-model="student.connections">
            </div>
            <div class="col-12">
                <input type="text" class="form-control" placeholder="Completed Credits" v-model="student.completedCredits">
            </div>
            <div class="col-12">
                <input type="text" class="form-control" placeholder="Active Semester Count" v-model="student.activeSemesterCount">
            </div>
            <div class="col-12">
                <input type="text" class="form-control" placeholder="Image" v-model="student.image">
            </div>
            <div class="col-12">
                <button type="button" class="button1" @click="submit">Update Student</button>
            </div>
        </form>
    `
}